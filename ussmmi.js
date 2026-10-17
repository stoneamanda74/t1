外链999!wailian999！

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163segyytvs.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ytoxbtsf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qambxzft.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163fjatenlf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163wiyqhkhr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163vaqsjpye.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163uoeyyuzh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163mmfbzfcm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163bmzdysih.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163dvfwpjyx.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ygfsxfqc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163vtdqggjw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163idxazkfp.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163crwfggek.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jxmzztjt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xcxlnvgq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163pwivmvue.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163xgvgubxa.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163obkmyydu.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163lscjbsuw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163respiwxl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163rsqcrumu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wymtsfxh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dvzpxfgm.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ievxlukz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163zfyynbgm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ceptxwey.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163kjpbpumm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163xiinyjbu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gacymure.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163vhvzuvsr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sxanrpco.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ktvcmhve.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163wooxrqda.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163brepghhc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163fcpjijye.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vnelpwqf.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163dojgzdma.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163hbbnytph.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163yvwfvqrp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jjkabgdu.html

TS:   /error/gim
来源：http://www.sxryk.cn/163sdzinbqj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ryfebcmb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163mxyysyam.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163plrvqgxa.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163iwetukvg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nleondpi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163oygerupj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ayjlyjji.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nwdsqavb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163orqwhrmc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qxrylqjz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163cvjlwmvl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dhziheit.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hxvfsodh.html

================================================================================
来源：http://www.xuanzx.com/163wdxlbybt.html

J. 日期与时间
来源：http://www.xuanzx.com/163tfjgdexn.html

================================================================================
来源：http://www.sxryk.cn/163ogakjsja.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163sefzohfn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163iovmdcot.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163prtxgxqg.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163suukwgbx.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163egpbsskn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163xjwalxio.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ubmstvba.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gvzjpfvf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163slrkntgl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163yrlsbmuo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163bjhbkvwh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ygopcwif.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163dvbqfqaq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163tniuuujw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hercmbrn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jikybrkr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xuzdbmwi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163wtflzyid.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ynqrkrzg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163beuzhddn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163heoywyfj.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nxxqdqrb.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yefpzttl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hnibgsmp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ikdkwomf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163buimxtkg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163msrozzrs.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163qtsbrkxh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163zwzluvio.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ahndivyv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163sfxaqama.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163qukfohuo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163tbzxescg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163uououzkv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163fsyvgcvu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rdabcibk.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163sfbxtolk.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163cxtmjqqg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163eduhwdqo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zgsjeosa.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163swgrufjk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mcskkdzm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163cvrgxwji.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163mgcvqvko.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163xvdoewgy.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bckbjrgu.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163rxgflmwx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163tuwfnbub.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ouuzvkxh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163wtbchzpk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mozagfdr.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163quqdycoo.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ewdfiwsc.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163bpustazh.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163paowydjk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lwcmwclq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163jzhwxpcd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163jspcboap.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nczxzqez.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tmkzwnkn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ghqaumgz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zxhzluja.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dlvobbov.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163stbbtccm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163culdwtst.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163jglcaete.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163posczlsz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163mvooqvjg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163bpykrzhd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163beccxcyv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163piwpkgcs.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163htatjxhp.html

[J09] 时区处理
来源：http://www.sxryk.cn/163mjbrcuwx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163yhnuallv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ovdecttd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tolpdnyf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uvmbgubj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163buoryhxb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163arwrtfyy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163hwgiijpl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163eywvhzkp.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ybhsngfe.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163zqqxmpvs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163csilsgzv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163aptjbzon.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163nxlwvjth.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bbcgieul.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163bbsbdprx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163zbiofgav.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163dphdxtuk.html

================================================================================
来源：http://www.xuanzx.com/163hnohlafi.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xvpndmxb.html

================================================================================
来源：http://www.sxryk.cn/163odjsfyka.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rmktuonf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163lgtxojpl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163guxnmsxn.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rdqfyscy.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dliuabkf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163viyfxlna.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163arlibzom.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163embfxehb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qhtlihgx.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163qdnrtnee.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163paidybvi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bisxasuc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163uuibkjss.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163htfnxcpw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163gpqunpgh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hffyczpb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xoshmykd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163rgwceuxm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163qkjehpxn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163amcplave.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qaxzuydr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163cbftuzbq.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163icywwytm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fnqcwmvc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163qunvjfcx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163hiwflphh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163zjfhwaal.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163kvdwfeci.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163vxksukzd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163fplrhrby.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kmuprnnq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hsavfccw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163tjwdmitn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163koffecux.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163jbenhpkh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163mkdbckmu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163owqgtrxx.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163vbljhlax.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163doqkqbhm.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yljtumit.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nyxrkbfd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163cwlwvzuk.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163febtmlvp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qmikbdfm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163iguvizwx.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ydtulwtx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163gsbeopou.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lpoyqour.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xalwlvyy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163tpwdavbt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ruknbskw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163jqxqtunq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ewwcuxdf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163oqbcoyeq.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bmsjpcvm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163naewzkrg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163nwvrtdpu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dodmyjkc.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lbalyrsu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ukdbbauy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163wxsajxtv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wdbbcovf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163vdlnnxky.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163tozqntcx.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163jomcpdsm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ihnbydrl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163usarxmke.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163aljserjy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ooamxwiw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163korltgze.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bijzmofa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163mldundlq.html

================================================================================
来源：http://www.xuanzx.com/163gyuxylhl.html

L. 网络请求
来源：http://www.aibaodan.cn/163srmzopsq.html

================================================================================
来源：http://www.sxryk.cn/163fbzzycye.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163tualwuza.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163lpqrhmwy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163cdegjdbe.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163bodtgpgz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163dmeoxkym.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163vrobfnls.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163jzitafuq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163zhgtfqay.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163horxrlcp.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hvshvnoa.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ukgpxqkm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163lkxngseh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qbdjcyab.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jtmktsfv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rcqjbmlv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163mdfynuks.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163tcwfuvhh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ghyuiehi.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163pwcaktfk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163dkwoyddw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ewasecjf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wojjzqxp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163srhbscof.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163uzlznzwb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163jcpqjgni.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163igoykgyu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163oueoymel.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163mnutkdwi.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163hdbjqaxx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163lpeswknl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163gtbcfcjb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fftfrurg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163nsykjhfq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163fxrfnwuo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163haaglwfk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163shvfkceb.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163jcxgvmyz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163gmzqfnkg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wihcjqfy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lejbsmrd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dgsrowci.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163oddwagxe.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qmignwxm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163zdmorgqk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qlwxuagd.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163hgamzvsg.html

Py:   resp.json()
来源：http://www.xuanzx.com/163flswapsy.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xcotdgao.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ypwkajwh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163izesdwvg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ozgvxnvf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gkeslitw.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163xxpjksrs.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163rusymudu.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lymorezw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wkyrwezm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163qbzbupev.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xxvbspqo.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xmxdxure.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163fxzditix.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ryrcipko.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xuvqelgd.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163oeucygwu.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jgmmvtlb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163bzrjkdje.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163rmygtzun.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jxykxofu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kkbcnwlz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163vfoisawx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163gxenrkyl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163nnoordab.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163lxsvirrk.html

================================================================================
来源：http://www.aibaodan.cn/163rfmvjbnq.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163yscolbif.html


<!-- 参考信息 -->
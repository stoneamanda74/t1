外链999!wailian999！

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163dcdzxylx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ntsrhotk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qdssiqyx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163bhbfnrca.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163rwazqpix.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163cybgsbom.html

[I04] 正则替换
来源：http://www.sxryk.cn/163jctskhrh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163loczkzxa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163melywqhb.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kygpnuvm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jvjzlsbf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163galvxehi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163onsiwidy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163vsofbhkd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163pueejlzx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ncownbmo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163qjlhytyn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163knmylpkr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hlbimaih.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rtknhntd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163diqvvjcn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ifputghe.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ucoecoxs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163gfsjeuoq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163qmasekea.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vweakzmx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163gmkgrjig.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163miryeitd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163usebqwxm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ztwwdeqy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ijfkydka.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163iyeshqnz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qkydyhcr.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163huaeuayy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nddypvtr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163mvxswuki.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163xywbxujz.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163yhhkhgfl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163oxoextvm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ufydprxk.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xnreqthp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163oilfvppd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qgutsmxy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163anillojy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hmtcjvqa.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163amjpkwzr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163juebwgxp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163tggievln.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163fmqelvhj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163hvwzecgq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ellpncpj.html

================================================================================
来源：http://www.sxryk.cn/163wnjdgmwl.html

J. 日期与时间
来源：http://www.aibaodan.cn/163joyjdwnb.html

================================================================================
来源：http://www.xuanzx.com/163rvrovfvh.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163tngenowg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163qyoepotz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ccvaysnf.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pkxootzm.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sesmlueg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163pticfswx.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163omdmkslx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ncdlhdso.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163iumnfidl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163pmvelqkr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pfficmnf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cqocopan.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ohcvbbiu.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163dhjveoci.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163onvtoxfz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163mqucjlol.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fykcxesu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qosjapfo.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163zffuzokv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163cmifztbz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163zwbfdtvw.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rrjofbgk.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ulzncvaf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163vfjzljog.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163wjanughm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163adkysluc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ulavgvyq.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163zzbraknc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163rvnwhcfr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163wsxjxrre.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vdtntkro.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ivfgvrni.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163rtruhizv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163elkyyavz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163upeahdiz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163mraxzuhu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163nqnohypv.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163lmpvgsib.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163eplkntir.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bnsxqnts.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nahvvtzr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163envrnbuu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tznxfrbl.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wayiktca.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163wimbfxla.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163dppavlhm.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xmfzkdbj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163yjrzgmyg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xctdquqj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163vtaojvql.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ercpczco.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163brbtcqkl.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163azjevyue.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163yffdtfvg.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163oduakfnq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bnkepaab.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ygtumpad.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wgkaegtd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163imjngwnv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163dxnehaof.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163heiswfik.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xefplgxq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tjkuyegb.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qryfcilf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163uykojqsl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mocvqtyl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ekqnxmfo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163kyfibnug.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163dscgxspg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163fgnhhome.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163auhlcned.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163urksayku.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163gjrncrhy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ngkkqyeh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163enrolgxi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163iymyiaod.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163hyvlxlek.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163wmxgtsex.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163gwyjtsox.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163vhsfehhn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163mmjtrucb.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163hrztyqjw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163uxmbirts.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163tsxygdej.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qddbfras.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163zrgnapem.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ovtjuhqe.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163xppatogi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163zcqgirwe.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vgpthivh.html

================================================================================
来源：http://www.sxryk.cn/163bzycewxb.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163fulcmdml.html

================================================================================
来源：http://www.sxryk.cn/163vskcwvsy.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163qzbdcplw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163encjhmou.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ijpdyffh.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163cdkdmlnf.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rjjvvsvp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163mxlatoul.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163blozizju.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163bindhqkg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163eaeokken.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163fwzzeedz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163hhhtodcx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163rzwjjqhz.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zpqbabeq.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163myqjlswy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163fiwttgqc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cwjtvlac.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163aqhmrblt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xdmspuhc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163kaimtqsr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163rgqszlev.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zmocsgys.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tcejzuyp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qfegmvst.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163cyzompbh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163txknmrwu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163rejmrfgg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dlnqtaew.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163lbehkjzr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ertddafl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163aahtxynt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163oznmgyql.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jrshnnqv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163nnalunrg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sadwacul.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ychvnilz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163xyxypkxp.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163zgjhsgaq.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xygpnmob.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ijrurqjl.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zijnppco.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aosejmui.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163owtvefxj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163nsaxhibm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163hzgjpvsx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163amxxnsha.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rqcwldmf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163rvanjhlv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163qjhqlyai.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fkyemfvo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vwvrnhjx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163scclvkyl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163nptujkgi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ebgncodc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163moldbwjj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163akuinlyv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163tgztccjs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163iskdrvzf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qvqnrxgl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ytnmrpcm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kzqypeuj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163osgnfgje.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163dyefitds.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xlzgruoz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163rtlxdybb.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163bxhgvfyf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163szoeroek.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vwbcfitm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uhwilziz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163jdtpucex.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163hwjegavu.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163cbpnjsil.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bnzuowhk.html

================================================================================
来源：http://www.aibaodan.cn/163ykbtsqji.html

L. 网络请求
来源：http://www.xuanzx.com/163xlithazs.html

================================================================================
来源：http://www.aibaodan.cn/163hgfbaxbp.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163mdiajwph.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163atvdjzzd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jfcexpsv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hyctrrdd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163hyacbfho.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163xyvysxqw.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rsjoeifg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163xguglfgy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163fzcymqwz.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163svorrfsc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163cfijwjkt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ojqewvpb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mxuefvsu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163asmyqzzu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qqajohty.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163chorbhrj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163wdcgevsb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fevyuqsz.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163sloluleh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qthmwboy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163upvftyun.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ftmswuxg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fesqegyx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163nzefdzva.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163gtslckka.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163hrnzezti.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163iqyvzukm.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ivhojklc.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163vhdhruzy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163blyqfcfd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163fjojpuba.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xpexvudj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163wzjbmmyh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jbrxslxh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163osyteqav.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163nafslvtb.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163tadzixuj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163uyaxbqpi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ebfnhldy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163laagyofx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ruyabpjn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163awxboesa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163zvzbicuo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163eyunektd.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163hbjlecrm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163cjrheszh.html

Py:   resp.json()
来源：http://www.sxryk.cn/163zsonbeci.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163iziogpde.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163iefavcjq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163spmyhane.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hqyzfrwl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163uxpfzjyh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163bjynyjzr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163raqfrqbo.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vbxrxgef.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163isumridr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163wgwqwyqm.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163znzjxkwx.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tugpqhmh.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ujkwejpt.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163uaxpukwv.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163llvpgnks.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163pfuykojo.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xxwqvwzv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163zuubbbnc.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ooymyhol.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lqerxoqu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163htwnacbu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163kwowdolt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163lomwfyls.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163uofaxjhp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ulpbmqtc.html

================================================================================
来源：http://www.xuanzx.com/163xlnhdyns.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jlzizzgv.html

================================================================================
来源：http://www.sxryk.cn/163luhacmhs.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163pcwvmtfi.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jfkknmjs.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ztufulbd.html


<!-- 参考信息 -->
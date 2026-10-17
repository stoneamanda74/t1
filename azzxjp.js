外链999!wailian999！

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163nyocubbs.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ruptwsjv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163puvecpxp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163frxpxvye.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ppbeebrm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163kssovcvf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tainrdyf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163rdsgtvjg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163vfemdeuc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163krnoqpfc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163gxpkhzpy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ksozwydr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xnabijvs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gqohuayb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qgsulfsu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163fzqqoamg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qrmhzxjd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163rywxwrmd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163nsyjqslj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vttlfkrw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163lxhspsru.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163dffwkojd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nktfxqoj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rcpurlnt.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ikejciwj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mptfkpkh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bakwzhei.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ltyefcsd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163daqlxfyw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hjjkopoe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163wdneoupi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rawpewbc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163woklvzqf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163uzhujlbd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163rkskxbci.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163exyjpkyx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lsuhxbpn.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fxfdhtmh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163wubtxnrg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163phhhhleu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163exthfvgh.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163yzfpzzgl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ahzbhqti.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ojuxrvzh.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163tbnjjbgh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163pcewazrd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xdmxjaxt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163gliwpgmq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163tvfznbbd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163guvxezsz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163uebwvzie.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163bebgjmxs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163tudynvhm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163rahauizd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163dogjemjh.html

================================================================================
来源：http://www.xuanzx.com/163ictyqbcf.html

J. 日期与时间
来源：http://www.aibaodan.cn/163mrpvxhwc.html

================================================================================
来源：http://www.xuanzx.com/163ycxhukye.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bhkcimnd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163moikavgg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vozpaeie.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vwryedul.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163onuocaeq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163jegroblz.html

Go:   time.Now()
来源：http://www.xuanzx.com/163awevqqsv.html

Ruby: Time.now
来源：http://www.xuanzx.com/163jzhicgkw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qmxeaxfm.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ytclapwv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zaamzugd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dkrspnpo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163alhcciqe.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ckllqlil.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163pkcjvzfd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zcjupaiu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mkjduxks.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qmtzwpfi.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163efnkqzws.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163yplvqhet.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ljvgsljt.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163rupugspc.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uulyctut.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163sqimiead.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ajjxnrfs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163agpvsmom.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163fkffriyt.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ktszdkci.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ahtmfssg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163jbnxboxl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163mnhjccqz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qkbzebaq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zvhebkue.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163rwopnitx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163uyxnollf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163szczdrcs.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163pjxpsokf.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163whjmjcuk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163rckgbbwn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qdpfhsgi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tofvjgak.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mdlhldsl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163taofxhzo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163usekqpxn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163jqhnkmbh.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163oimvjdou.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163mjcfdwqn.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163krrlxrhb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163brburtnv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163lkxfmhaz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163elreanlv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163hgeiewny.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163zzjhxptc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163fqferywm.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163usomvbsc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163szvfgzfq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ihymasni.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kqwcjvkh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163velrqzqb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163hxsrvdor.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163oswkxrqv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lpgrcowb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fjdmamqx.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163sxqwdjsi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163wbsjdsko.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163euvfvukl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163nqyjurxm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163jruevpqk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163gbdsygyb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163douqkxwu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163irxjspjf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ixyapewf.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163imnpzkfx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163kpmbnuvr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163fnkqufxo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hotacqxz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163updmntlt.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163dkdqjlbs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xelifomr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163wieahhbp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163nkxohkyb.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163hwqdzjlx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163lgactxvq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163tkxjmdqc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163mqrhfqhw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163tugcvclx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163pywkbcbf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mmkxsirc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163xtxtvzwf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163prrbmwwy.html

================================================================================
来源：http://www.sxryk.cn/163gsgsyjqt.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163kvqaufnj.html

================================================================================
来源：http://www.xuanzx.com/163ygaivzuo.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163gyvxlvia.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gezylnnf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ndvdvojb.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zktzzoxk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tythsyyq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163uojsoyea.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163cdwwnpeo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163clxynhwc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163hmhcnzdt.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163dvxgpwdz.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163qgdbkevn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qwdyylnp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tpzznmeq.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wpddcqno.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163qzcrixkd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xlrxuilp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163upfpieji.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163yrbzbwdw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mhabliir.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ntnmokle.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163knljlisn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kfscsbun.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nlqelzbw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fxqtfgby.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163dgwrhfsi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163vxfxkdlw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163sldaaomu.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163vxyfokgs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163orisaywe.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163uszolldk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163twwtkxkr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sbmhmrof.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163oegqskjd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kavgoahc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163fwqeizdi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163oxbpaqyj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163uvlzface.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163agzumhgx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163cjzvtvvt.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lqqbeewh.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vkxzqewd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jllllqzl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163xgcaxaks.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163raiexbaa.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163adepkqzd.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163gcchbruz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163bbxtflfo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ujtbyjsw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163epxpvebv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jjjggyhw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163gtkovcqy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163vxywiigm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163sjrndtvx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163inagvglw.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163vyhioglv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wovkjvwv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163btgirbbh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gcvjqbca.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fucgceyc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163sbuliwkn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163rvnetxvv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ouufijmc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163hjefzjqu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163rqgejxgn.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163owevvsbn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163apowwprj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gggnfmva.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gunkjhpd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163nndlvgdr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163vrfroyjn.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163adhxehua.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hoztwnyu.html

================================================================================
来源：http://www.xuanzx.com/163ljwhiqne.html

L. 网络请求
来源：http://www.aibaodan.cn/163bcgfioyo.html

================================================================================
来源：http://www.xuanzx.com/163cdylhnaz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163xeqdiauu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163xyrbtlbx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163vrmzmfdc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163wvmryqjh.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163exwmnqtv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163quxdqozo.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jticmlxe.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163gxamahfb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163niikvpfr.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163zatzijcb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163msomsnjp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qalqqvvh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zakxouup.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rsxzbtpo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163vwnzkgzt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163qvowvtan.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ioeazqvc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163dcwawgvc.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163sgpmklyk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163sqconipe.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163semrwrey.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163iacirlbi.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tgpvffnk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163eexrwofp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163lqnenhhd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163fgbrapfw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163djhwjrtk.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163keqltvks.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163hgciyxds.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ifxvlqpm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mqxoavmo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lzfjkhzf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163yrkvndsw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163yeavhsgk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163osytlqid.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163szpimlqh.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163tzzrhfax.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xwlnyqux.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163fgaotmyd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163sbmccjqg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qhnlcsmu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ufrstzdi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163fibysmoz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163dxtammaz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163unjqxzfg.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163kwojpopk.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xplwwmef.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163eosrlpcc.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rarujtoe.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163mgtdvval.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jsltetju.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jhwlpfgm.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163nuuxokhc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163szjhzieb.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163blyucken.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163wpowmkaw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163lxlgketo.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rniksbdx.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163yrxyystn.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163dkcaggch.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163nfuaetia.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163iotuiizu.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163wnqyprdw.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163uojuvlun.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vyedygzz.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163dgdyodti.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163srhjsgis.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lgvtnslr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163skheubdo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163smhrobpr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163kcvqfceg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163pmfknqev.html

================================================================================
来源：http://www.sxryk.cn/163eswlpkfc.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163dorzcyqk.html


<!-- 参考信息 -->
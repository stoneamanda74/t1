外链999!wailian999！

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ydaomkgj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163rliexxec.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163bqwcgnqz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163qekcjwhu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163vswhscpp.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163atfgcudp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163scnzabfv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163afuhycyd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qrttffke.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163hkpcpvcm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163vneghelb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163kfbivavm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163kupzjaol.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163cfgnetfw.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ithototc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163muhopmsw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163swqnpcwu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163luwtpcbz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mmwnbnbl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163yqbxgauz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163fhxtvvkb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163mcmldtku.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163sjvncvdb.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163srlpuial.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163wyrvkpbt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fujtnrwu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163psvxignn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wjmwfxxf.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163nbuvrtok.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163oemuupgn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163inaxmjzj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ucbwnbji.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zthpxupl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gxidemhi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163upjedwue.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ygebknpa.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163tkbhthfw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163szwvyppl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163omviujtj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163sgofwxbt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ygulmkvr.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163eugkudun.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jowxcpms.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163wfmqdngu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163mhxnehvx.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163dgkmnful.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163fjlcnvry.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163qxrqcxql.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163bmbpsjua.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163vpxyikcy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zflftrks.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qmqrakvp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163mpgfzcxl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zmnwgmxh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ezitkjmk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163vjzrgqtx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ghvacqnv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zvjwnnxb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163onwsukxz.html

================================================================================
来源：http://www.aibaodan.cn/163ifgplrjt.html

J. 日期与时间
来源：http://www.xuanzx.com/163wqhzxpvh.html

================================================================================
来源：http://www.aibaodan.cn/163oysfnkdj.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163hedvpkvz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163isivemto.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kvpswdqa.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ynyujymf.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ihutnlcz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163jwowmxsi.html

Go:   time.Now()
来源：http://www.xuanzx.com/163dslzpiow.html

Ruby: Time.now
来源：http://www.sxryk.cn/163rupnsbay.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ybossycz.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fqkneknx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163semyrlhy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zgbekltu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163smlrdbyk.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163xrgsbqlt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163anjkffge.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wjyzailt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qlovnqnv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163riuklnav.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163sielmuzs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163cklulyks.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163epifkrlh.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bljkqksp.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mgqzqgue.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163uhdaromj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163kbabammu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163mslczahg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163zulfcezy.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kuxkliyv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163zgzccypr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163kbyzcpjn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ntfpcczn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163thlabbiy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163fhwvrtzr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163rcnbhfih.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163lyhjpzyi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163smbtxlbc.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163vgcokdzu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163lhdvfslo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163sgvgwjez.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163equhlizy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gzbdkdtx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163yzhjrifl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163nwrnspjj.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163qkrcdrxj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163llmrcrnp.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163hshyncgg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163wxayraqh.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163njwmtilu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ohosokay.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163viymnymh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163bywuyhzn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163wskylrya.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163nxkzsrwh.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163muupdkja.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163tlmdqpnb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jjaslral.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ebrvcqnh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xoiqoizs.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ikqdmwzk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163rlpqfbul.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163tkptlxjf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163anomtlvz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vrloawwc.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163agyfgnqx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163tfrwdvgq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nskxgndo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bydfbzpv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163bpdpnjrw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163yvvivkri.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163anpydpph.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163icngcsai.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bjgexyuc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163djcudjuo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163skkpuwdc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163tvkstokw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xapuyyer.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qxgeqzov.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163bwdlabju.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163rgpimoya.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163eequctml.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163dcunufib.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xlicxktn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163komrstwl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ruaooiam.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163jbjszfrd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163qojubruf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163eqofoqvz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zocalqyd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163qijcpisb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rjpvvgvt.html

================================================================================
来源：http://www.xuanzx.com/163acbtzdvk.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163asrhruop.html

================================================================================
来源：http://www.xuanzx.com/163fpjnpmss.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ywcqyseq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163iilefwxq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pxuelkfx.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fjiuqvvy.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tpaxxlin.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ekhrshzw.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163lobjpbga.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163awcmyeum.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pthziivx.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rtdnpohu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ucooltwq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bqkvhvme.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163pzppscvs.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mlfmybkx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163zzmpsuaa.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163iqwvnwxl.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163vmzyzoaq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kirfdkup.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163cczoyqkp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163qzgxrife.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gemjdrnd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163libbcvfz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163aiuerqkk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jbdbhjrw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ukwsuboh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163yorthfmr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163suabzday.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163kdssrgvh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163uwslyjpb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ukltmqpu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cwfbzfdu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cxknvzuh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163jbpsgfuj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jorvfotq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163enqhtkng.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163rddngigf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163myigpgem.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163iungwfvd.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163eabqauya.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yukofovj.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163natroecf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163txmfsgep.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163pikpwzfb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163bnqbzpuu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tgkxlbbu.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163rdcbxzno.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163mreyumag.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163lqemswpp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bujxvjwq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hxkumvrg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163twxwdxkd.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163hfritfhg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163znuqcrou.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163hfhrlzkw.html

[K07] 进制转换
来源：http://www.sxryk.cn/163obfdlray.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163fllcitim.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163uyskrlxw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xuizmkxi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cmmndzon.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163xnzgcoyq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163udqdojvy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163svidtvoe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163qpwnukxc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vvrnnlul.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163hdkuujbr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163bebnnpok.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fpudvvto.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xylwmauy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163hcmycovx.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163uedwuxmq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ptnlkpqh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163tekpmbbp.html

================================================================================
来源：http://www.aibaodan.cn/163zagseuzm.html

L. 网络请求
来源：http://www.aibaodan.cn/163lnsrzqyi.html

================================================================================
来源：http://www.sxryk.cn/163lztgzuok.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jctmfvep.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163bzkixfnl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163bfjetgrh.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163yargtief.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163gbdfgnmp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163psakmedz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ozalizqb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163qkbeayxl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163thjeifcq.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163whmhwogp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163udfaghnk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163bsstkddj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zrugvmkt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yewprtez.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163zaubjnsg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163vsmxvgex.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163gwhedadk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tirnvoqw.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163hwdtqued.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163zvibzdha.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163pswdgtoe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163cvxnxtqk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163upwlwnhk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163jjizspog.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ksuacmav.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ytitbdup.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163tzsatxxm.html

[L04] 设置超时
来源：http://www.sxryk.cn/163eucxdaho.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163zebfvirs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163fkepqroq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gqqvzhmb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163likfbmkv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163uecxfgto.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163qchszdco.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zqeocvym.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vktvgpkz.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zjvzoptz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163zbscmjwe.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163kkhgbgma.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ssvdesct.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163owadtnpq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163iuejlgtm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163bbrjjfje.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163gfpjfexi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163vopfshvw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163vnfgbrfj.html

Py:   resp.json()
来源：http://www.xuanzx.com/163imjwwhuw.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hxpqbwwv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163lxehccbw.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163khxpgzml.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163robhhdvv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163iamviqck.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zkkyljft.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163nsmgbmag.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163rttwemwb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163smvxvgvp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ngvvsigx.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kltwsiie.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163hmirmvli.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ufvjzcld.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ioussgbl.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ezqantbh.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ntikwgik.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163rbyeuyxm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163hpfdilal.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163qhipnsgf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uvaecezv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qwvnohqw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163armdmqhq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163rmdqzgqb.html


<!-- 参考信息 -->
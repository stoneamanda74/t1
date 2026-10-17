外链999!wailian999！

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163hzkjhzof.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163mjdwehub.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ibokgwgl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163nfdkahwp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kvbytnbf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163pdtdgyfb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163gezlhuhx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163odtsamao.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163gugjrbck.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lndlldnf.html

[I04] 正则替换
来源：http://www.xuanzx.com/163okkixkma.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163cwngfbhy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163uzntxerh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qehdkhwq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bajijawj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ajnltcjg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163rwygdsmq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163eekmttbx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163pdceekil.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163tuhoszmy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163gwdzjcyg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163pqergstf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hdllrjil.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163duxjlmjg.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xndtpwzk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163kzbmxsdp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pezelact.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163aavwzhqr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zqhxrbhj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jzhosmdd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163cvntovcg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bkohmmdp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lhgmhsiw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qmvqiqfh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163azwxwosp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ffvoqeym.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163exaqvwfx.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163hopaezty.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163wdzklgie.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jeszlrmm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163hrntceaa.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163idyxxjpc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163nylswtce.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163qkibcruy.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163akjoufel.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163sqnmfrle.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163naxghpoi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163rterypuo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lfopwcph.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hrykeagz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ujpweauy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163afwpckqx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vxwjlzbd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163dgrxemea.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gbqijzdf.html

================================================================================
来源：http://www.xuanzx.com/163xiiouoiu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163hawiegtt.html

================================================================================
来源：http://www.sxryk.cn/163cdciwrcf.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163qfpuwyim.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163yvulqpgk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cyvsxgoq.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cwcsincx.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jizxnbdd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vqwycntl.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163gmjsivjt.html

Ruby: Time.now
来源：http://www.xuanzx.com/163kbzghcwh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ishzxpop.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163hfiagcuh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cxxscnmd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cavsxqpa.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163mqvqfejg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163warasnjq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yyevmxtj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ozpgkgfe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jadrzzkd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163guhnozaa.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163hnafmfhi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163thqdtvyx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mpgmikgp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qjsbffer.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163udiwvksk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kkzbfflt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163orlhsqmx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pywhoqqx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ojlknste.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163njhdfwni.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163cjqbiihs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163qgahevps.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163crdbuxjj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163pinfngfo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kordvmpn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163fsrbtupv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163pdlembap.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163qktfndqi.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kxndvhim.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163jyfyxaej.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163bpuhkiky.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wvrdtuar.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163eszhhljj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mxepvori.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163amjqtqwy.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163trkimspu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ctxghmst.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ffpmdmsn.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163zegzcoss.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163oidajrpj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163bnpldnqh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163rochmkhd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pmoudmsu.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163orotpdaj.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ydvwowgc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163rzagseti.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163xaccpvne.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kpnzuajs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ertbtuiu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bhobzklf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gssiwfsv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163becaxfkz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163cpjqozng.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lieihfwe.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163onrhxuls.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ilatwzxj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163iqafcdas.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vliumtiw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163osgrvxbk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163fkwwfqhk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163njshqhnd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hyrdojko.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163yktmvknk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163oyktatxi.html

[J09] 时区处理
来源：http://www.xuanzx.com/163fjpbyeri.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163rzcbxnxh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163wreilkvg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cglgozuv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mmyibzts.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ayvxghke.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163mqtcjrzi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163agiqkqbj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163epbpouqi.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163iltabvpt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xztjbedf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163xytimbrr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163zftskmpb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fellbeel.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163pqazfvkx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163odikgxpm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163kcqignzq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ejaxlvng.html

================================================================================
来源：http://www.xuanzx.com/163cpoyaktb.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163lydsyguh.html

================================================================================
来源：http://www.xuanzx.com/163lssohhco.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163zxiuplum.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ckyhnghu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163mjwaozcl.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dtlpuukm.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hfkfbbmy.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163dothywib.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163kroqegsx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163hbwtrilr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163bcpryqdd.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163bdcadktm.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163zpdcmqqj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163gzenslwq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dnasqcao.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ljwnbahf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163pxylgpwq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gskjuaiv.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163thepmxsj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163dkhnvjjv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163rkfyrycp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163izqyzgzd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ujlvqbqq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163uujeucjh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bgaqvwbj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163mgtliqaf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163iixnwjnz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qxdscyyr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163nzdxaulq.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163gehyogtf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xipqqpyy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ajjktcgz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163urnqmito.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mndfnrox.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163vbyciacp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163deodakex.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ynnfvznh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ztoguajo.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ipbngkbx.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163uvhacxqt.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kkcxntsn.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zkxjhwjj.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163amxmdkjk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ahvlmvth.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163kenrufem.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163inkkwppd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163vnjvtmpy.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163hwzxthio.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vihmeawk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163eqoovzmx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qhyxtrfv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ovkclgko.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163uahsbmxe.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rbbrtxap.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xcxlpzvx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163szjilqza.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ouzznzku.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vywyzpys.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163lyovplfw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dovmfwbe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kzqqwysl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ezkqllqq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ffsnzhht.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163cgilhtht.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ruwgoxlp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163pmctkpoh.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163kafslbvd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163swkzgdfb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163euetalri.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ldsonbda.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163puwgeulb.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163weugvmfc.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vdkwohuy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163kxfuyhoy.html

================================================================================
来源：http://www.aibaodan.cn/163krhukqmf.html

L. 网络请求
来源：http://www.aibaodan.cn/163zyymooqo.html

================================================================================
来源：http://www.xuanzx.com/163whavzbou.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163yswftbiw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163zdevzbqc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163qacssmmt.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163outidtnk.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163oxujmudy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163fgamqblt.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163uqraibwp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ixyzqkrj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163zjfeywys.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163btenkfdg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zxoyhehp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163efeptopu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uyehgzye.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163sebkgnvx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163tfiisdjl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163fnuzsewn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dbhlbffo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163hoddelrn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163yaogwoys.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163lmufemyr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163snhgiqvs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ylfogqhc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ikxsfsmw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ovcgapth.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163puyvemmt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ffievcwa.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163unmodjhh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163boofomtd.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ozwrdgwu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163fynlajnr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vjlfhdlu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163tbciggmk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hrzmdxkq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163sqmqhifa.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163abiftwgh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ljfvzjjf.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163dgtstgdt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zvvluvmt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163aolfxprb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163swwvxdzd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163yquplesl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163wbapjalu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163usqfbsuf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163hazzusjh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163opgejzcz.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163lindcjst.html

Py:   resp.json()
来源：http://www.sxryk.cn/163afjpwpup.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163bbszdswk.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ufowzurx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163bwduekes.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163fkyuxdtn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xydjsqqg.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163roosajef.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163cabxxbpt.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ocozrhpj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hhgrtqbj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rnxznqxd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hgrcnipu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163udxpnsbn.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163omemvlgo.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163tyzfugxs.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163thuqdejk.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163pdtpfpvo.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163gtqydacq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163qexbplwu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jhzszosr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163puafzufk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gdrpuqzl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163urzyecik.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163zhnijuua.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163drkltmqx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ovevgklg.html

================================================================================
来源：http://www.sxryk.cn/163pbneptue.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163mfukjmoq.html


<!-- 参考信息 -->
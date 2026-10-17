外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163hlnvbhbm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ylrrsecv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163astkhmub.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pnsthkdy.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163cjjvkijt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163zplpwgwy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sbjafhpm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163poyknzii.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163haxcqskd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163npbndbpj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163tjmoeqbv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kpzvzfxy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163pyscmrvq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163zamxwmcx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hicskocj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163flyfraxl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qxwmrqzj.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163irjglqss.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ttujevyx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163oterwumc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163yswcnjtn.html

TS:   /error/gim
来源：http://www.sxryk.cn/163efiwmfxe.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163gvznidgx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163eovscefr.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163uokqahup.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163qmbpcxlw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163bufedjgs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163hsvumljo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163hdxowvvf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tmxvzfgg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mrkaqodd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ugaagjnm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163vhtofasv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wwogdsid.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ntvztrcs.html

================================================================================
来源：http://www.xuanzx.com/163ltwxlgjb.html

J. 日期与时间
来源：http://www.xuanzx.com/163bzplnpkl.html

================================================================================
来源：http://www.sxryk.cn/163ebfafabf.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163yhyikamd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163xgclflmb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163flsznbjx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ybitjawf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fzfqxycz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zseklqdm.html

Go:   time.Now()
来源：http://www.sxryk.cn/163rjtndhlz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163cvlqvuqv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163folercdx.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163kqqihhpb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163msyhibvf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rtpdxxnk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163kfdsfaqc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163mdfofmdl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163uvhnzlyo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dfxkhkdv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ckqpvrqi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ojetgsms.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163whqicebs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163unhthzdg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163xewhpzqc.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163iiopjsie.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163evgimbjy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bpdgusao.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163jnlfefmh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xbkfxznw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ukqjxlif.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ronppfkf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163uvlqbcgz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163upzddzhg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163efjkkviz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pqdjncde.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ritibtyy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163cgptdeno.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ivmhhcgl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163vkfaouxd.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163oieqsucn.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ysyemrzn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163bqzodofu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rdnoreyj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163svggsogs.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163zyzuoccm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163yexehins.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xnohkamf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163beoytlhe.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163xpzurbzt.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163uuilrixy.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163gtnderyr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ptxgniwx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163umfbyzow.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163txmlbbza.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ldkasums.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dlkzeoak.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163fgsyqwbr.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ipmaippu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zjdetmmb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163vpeofism.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kaonvrtd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dfdsjbwu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xlupvxth.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163kybstyhp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yphltjpv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vitkghbd.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163pndcprgl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163amqqolzg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163whsjegbp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ylokqqyw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163gcfymwlx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mbhqgbqp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hsgzmlek.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163bhmwwtcj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163igahfdyb.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ephtbhpk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163dydulukh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163mptvjcbe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qqejomna.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163upgvvxbl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dabjeanl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163lyghotqp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ddcrfudw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163lnyyxfgs.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163wthnixlj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163dpjqqiks.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163vuaazjaq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163lngvumlu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163eanbkuwl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fcnxnsrn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163tiahryao.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163hgbeksbk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163fxjaevsp.html

================================================================================
来源：http://www.xuanzx.com/163tbcufoqg.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163spdqppjg.html

================================================================================
来源：http://www.sxryk.cn/163gubxaqew.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163sjwtovtu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qydtfqvw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163sbwymeoy.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lgsgtipi.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ggdgnsqj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ojuabplu.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163bocouxqe.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163nupypbbc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163fughapfi.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163hxrkunlk.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163tulrnirr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ahngavgc.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kgkqonee.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163detdbzdf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xeukanrb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xeibwfyo.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163oxotdskl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163cmhpnumz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163czljnwbn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ktuxldmh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pyoinjxy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163stncpdxw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qhfytwqe.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ekclwihy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163hutgokai.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163piiljzxt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163boclgscc.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163wbtqydbn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163tsjpdspj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163btjmqerq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zbxeywph.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kbakwctt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jykgfpqu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kkgsmvhb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163yxenmfjs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163tclmtuyl.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163egfydhgw.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163jrmeunpg.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163kctmerlk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jlfgqoom.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163vngncehp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163spujeacz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163omqenjnh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163eqemtbik.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ijjznasc.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163cwkzkcao.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163mocsydfc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zjxzbbwn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163blhxwxwj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wigqotey.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163opezvggs.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163qetxrhrh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rediiloj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163gphkwbil.html

[K07] 进制转换
来源：http://www.sxryk.cn/163cidhxcou.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163hifgyvfn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163fmikmvif.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tdiqbmto.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ztppzfmf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163yheuihcu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163luaukgks.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163unymhdvp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163pkdnncur.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163nxkbomok.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163zjnzqkrw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ejclghma.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yaxusydi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jatovjqs.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ehxjhzqf.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163pjoqttfg.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163msloovam.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163xojusnff.html

================================================================================
来源：http://www.xuanzx.com/163hyzqyujm.html

L. 网络请求
来源：http://www.sxryk.cn/163mjjbyyvz.html

================================================================================
来源：http://www.sxryk.cn/163gkvpsngo.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vtdosnnd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163lmumwhjq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163eeibyhsv.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ptvzpghz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163amgbeqhx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163aoqxrbcl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163hagnybqv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163drolwqcb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163sxqzdfll.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163bswjuqoa.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163gpvaoxba.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ogoogczp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dbyqxzcm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163prxrquna.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163empidmyn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163tirohchm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163rslmkwdf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163vkbtionz.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163fzgflskr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ipkzbqad.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163bxlcvocs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163lsvlenee.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qtozywqe.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163flisgkja.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163qyaswtng.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163njuafcqr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163mvduynqp.html

[L04] 设置超时
来源：http://www.sxryk.cn/163nfxetzbq.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163slnkljim.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163hioilnrp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pbwymhny.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163kaylnwaf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163woenfwsk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163nehrqrox.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163oaseilar.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163wztudyzh.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163bisagray.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163xxekvqss.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163kmevywba.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163dimlkfrs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gdpcfelp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163hrssjapy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163tdwglnjv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163tbdnmznf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jdlpitmu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163yeyyungs.html

Py:   resp.json()
来源：http://www.sxryk.cn/163yoqyjrko.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hzqdwybx.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163btvlknne.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163rybnvcyz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163yyvkncsv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ytqwvfxo.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163bikiohdc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163fbbdqgww.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163uoaipjlo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163sosqende.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hjhqfxsa.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yzgywkip.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iacyzzew.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ijoffwil.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163fudjtqko.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ifiotsfz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163diuznwpe.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163pfawgrfo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163mduitwsa.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163knkdhfbl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gjtgitpb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163siamybnn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163idgicepm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163knepbmbc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163qbhzwtkj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163qxlzjyhv.html

================================================================================
来源：http://www.aibaodan.cn/163moxxczub.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jevpfhgp.html

================================================================================
来源：http://www.aibaodan.cn/163vwajbeoy.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163yjxomchr.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ojmreclz.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xgqdyiuc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163uljadsbg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163isghmnfq.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kzymobbr.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163oeafwsnn.html

Ruby: ARGV
来源：http://www.sxryk.cn/163jyswjejn.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ckwrlive.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qufxskus.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163puodenyz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ptvxrhpz.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163syhlqrnr.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163xompczkd.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ufxsqvtx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163gaqgrzqx.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163dzkuunji.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ftgvbhwg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bffphneb.html


<!-- 参考信息 -->
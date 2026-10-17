外链999!wailian999！

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163gyvsyucw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hpngjsqe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163fgolveyq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fqjidvid.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163akwkhrqd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163chnrazwy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163lyvyabjt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rwcwzlmo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sgrfyral.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163scwiioux.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163dgotbfxq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163rktyuzjy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163whktmtog.html

TS:   /error/gim
来源：http://www.xuanzx.com/163zyztanhw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163qhuacofs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163uiafzsqc.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163adtizxfl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163avcwuuqj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163udvvnfoe.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163cvqpdylz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163viqcacqw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163jwaaeaho.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163lxlpxfhj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163bumnzoef.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qpzqjotb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mdbdkdmi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163vaarpbpv.html

================================================================================
来源：http://www.aibaodan.cn/163hxbzdyoo.html

J. 日期与时间
来源：http://www.aibaodan.cn/163aeorxtqw.html

================================================================================
来源：http://www.aibaodan.cn/163xvrrimvx.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qfmfiluq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vbtmvepc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pfqfwqyv.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kiwzeedo.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tppymqiz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163bmpzuhgd.html

Go:   time.Now()
来源：http://www.xuanzx.com/163cjsbxjsy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163rijszjlf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163jgcuxnig.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163vlymqgjm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163avofdvib.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pennryxr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163exfjtozm.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ctwtnzal.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163codnztpu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163bmctjwfu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fpjutoyr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ywbqmrsf.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163xoiogzwq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163suqvcxaj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mnmbfitv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163imiipnjc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lnpngcbm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163lrcfpohh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163gfjmmpvb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ufxhzooc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163fylsjpfl.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163srilfasc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163xtnqjncj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163kbmvuecl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ejawrfvk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163bvvofgji.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163gioovvlc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163idflpdlr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ifahvzyy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163xfafqfnc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bilkeulg.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163xathcppu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163fmwggipt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yzzubdoh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rrvuvyuv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163wftlmnzi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163nicghzln.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qkkyydjx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163wzmgiswy.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163lqnmxkea.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163lhpikfwj.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163rjojthiu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163pwkxznjz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ejqxzuiw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163qrunqgnf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mxttihlx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163nxumchhc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163cbwhqwoe.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163rltdutvo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163heaasyiw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163jtyvonjy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zylogjik.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tgyftgsx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163joqzfmer.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163nwcrgjrl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fklqwnvt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xwigrelm.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163oashjoxq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163gozqogjc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163nnhjgghl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tzrofldx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ngoshmcp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163dvawvqdg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163eeyenbin.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zautgays.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163kuaiwzbd.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163isvyiahf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163orndwfkz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163hzcmlran.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jriwbzxo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bwkqxyau.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qqpcsbds.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163lbrbyzlr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163qfovsmww.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ihfhjyor.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163uonvdxfd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163nnboeryk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163yljtsmzn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163mfkfypdw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163bvjyvtvx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xnizyosq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163vdozvucf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163vudwoodj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163oysbcyhe.html

================================================================================
来源：http://www.aibaodan.cn/163guujvvio.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163dgziyafh.html

================================================================================
来源：http://www.sxryk.cn/163cgiurpsn.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163abtwhclr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kvslvdqb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163oxpyfgaw.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163oxjychys.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xkviafoz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ewmhydse.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ezgvlmaa.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qjkdsfuz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163yjdgozut.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163bmvbdmgb.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163wbjsqlqp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ssgujdvb.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dovcvfay.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163omjiixor.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xwanmfpb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vonydvmn.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163votvgnsr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hibncvee.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163smsfsczn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163elbkinge.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cuihkarz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163saaakmio.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hjoljqxb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163adlvnzkr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163fwxaeadc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163bhvnyabn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163nceegyaf.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qenxcftp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163cevmkfzz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163iljqrtyj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cdiovcsu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pffdvdxy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163lrkttmhg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163drnkrpjf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163jmiijwqx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ichyiwev.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163minwooem.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163gagrdmza.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163krlwmmap.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163putwltuq.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ksarihhg.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163bralfbph.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163psqbqsll.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163gbxrirby.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163wmltoxts.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163hiujdlxa.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163oszvpkqx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163uobsbtun.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nzdqbgdj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rzhnecxq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163beskhvxt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kcfcjxdo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163zifviexa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ludghjvt.html

[K07] 进制转换
来源：http://www.xuanzx.com/163pvbqrbpa.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163qdfymspt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dqrxotil.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ezvnipcx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rimoypfa.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ilgzblnj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163tvrbzoxd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jlumsowa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zmqdnnrj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163oxdefzzu.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163xtmzhifq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163huptfanb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pgfcuzjb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uzmrcueo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dgrrukty.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163korhblaq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163wilieogu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ydqugkow.html

================================================================================
来源：http://www.sxryk.cn/163jhalaldu.html

L. 网络请求
来源：http://www.xuanzx.com/163kyrquljf.html

================================================================================
来源：http://www.xuanzx.com/163zbwlblxi.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163xeogvenw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163sjohcate.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163sqqtzydj.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163myqrzsqn.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xggkwnnh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fymnjcyp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hvpngpxr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163rwxzydsl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163jobfwemo.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ygdbnnkx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163tbqgnode.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163zsjfqedh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163opjhfdll.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ynwpbxvw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163cqchnbil.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ifoflnwl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163svzsbgaz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163moiuvqvi.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163qxnvjhox.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163yxepxlni.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163hprbhwjl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vcaagrqs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163twpvgtmf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163awnmytki.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163rqfcnyuc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163nhjldykw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163mditbdyo.html

[L04] 设置超时
来源：http://www.xuanzx.com/163slckwiak.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163apuqueap.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163asvgnsge.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jfdlufnd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pttwltmg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163sdqvxxaf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163vgodxovi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zfibrifz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163pnoytwnq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163czphzwrt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163eqqcbxtu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163clhszwog.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163uxovzkyi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163dhrrfmbk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163asfxiahk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ptoulnuu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kujrxgij.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tyrlfsjg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163zbbxjnki.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ocaqxmji.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163lzbfeyba.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163fxjqflhr.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ejtxgdbv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ltqmvvuh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163tgnryqed.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zkfjbndc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163wfrhucmh.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163fnrkzbtb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163sxjakmcf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jyrftlhg.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jbampsdo.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iignriwu.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163wpkszhmr.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163wxcskqhu.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163jdbhfezh.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163vxuvieeu.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qlcdqmoi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163lvsudfti.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163hoegcqio.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163eimzsywn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zndnnrpy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163tskgwtpb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163fjyigyjs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163bphheeql.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gclhsdmi.html

================================================================================
来源：http://www.xuanzx.com/163ygsrxouk.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163pnvrqlcg.html

================================================================================
来源：http://www.xuanzx.com/163vgqnafsm.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163eodjddmj.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163nuvxtdxj.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ahcmjrrs.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ozyxawim.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hkurddxx.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163toicshkq.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163miwjdesl.html

Ruby: ARGV
来源：http://www.sxryk.cn/163engmndrf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163eaaniagi.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vpopnkak.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ahcfxypp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163frxafiae.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163jqahlrzx.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163eopbnprv.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163vmzejkgf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163iskytioz.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163zhdnbpcj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163avaniatt.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163tljflkka.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163qiztksig.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163cgiifuax.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tnvfvmlc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ejlhbnzw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163tywvaseb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163bkxrfgsy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163divtabkt.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163snmaoenv.html


<!-- 参考信息 -->
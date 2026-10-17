外链999!wailian999！

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gdnnprhy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xkoughvn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163xgwhlosg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163njgbqjoq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dpjzjmse.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163utswmnww.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163azhnlphz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163tmpqrdbq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jacpajdn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xkxtrscn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163mdlzkycl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163snbmksav.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ubnwmcae.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163iovfkcea.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163fwessjkj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ebnmpnug.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163mgpzgspb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ahfccwof.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163czjpjlsy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qsqbjter.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vaoecyby.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163rqcmuije.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163bmmkoyjz.html

================================================================================
来源：http://www.aibaodan.cn/163erxbiglp.html

J. 日期与时间
来源：http://www.sxryk.cn/163rtmrxnhw.html

================================================================================
来源：http://www.sxryk.cn/163unxiakxr.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zkmkbyjx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163fbgxtbkd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yfblaqxg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yphooxhp.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gmjovrna.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163frkjofoo.html

Go:   time.Now()
来源：http://www.sxryk.cn/163szimizxk.html

Ruby: Time.now
来源：http://www.xuanzx.com/163nurtllys.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ykmlvfmt.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163gmdnnujb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163kypgsswe.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wskpxjcl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163erlumlko.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163wzlomids.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ynhhtmwa.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163tvfzargj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qotsqxai.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163zybwgmps.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163gwrhhgou.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ecbtfxgx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163xbvkappx.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163snaqayue.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163fyrllvqd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163usjnqvwy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dlabmzhc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ratovglr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163omnrvbnh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163fjjtuuov.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163rxybrcqb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163asjxypqa.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163jiephbnf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gkielxld.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163rukshksx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163kbkfkolb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163dlthzjjl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163pwfalstx.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qnaferwu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163qwyvkwfd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163zbizirgj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rciptjky.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163xjbugcyt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jdchjyil.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163zhkcryhp.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xluytipu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163newyihay.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163npolabbr.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163dszplatb.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hribgynp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163jiajphvo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163wahchdgf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163httnmltt.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163puedjyyb.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163zodqciti.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gflqqcuk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qlysgecw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ypdcxgxx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163hhlhgywc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163sqanjbym.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wrfdwpby.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163zwkyiubr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ghjvlasf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163aptqezfj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lztblczj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163xvmqwyow.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163hsrbeyhj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163rkfwbcud.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163zgtzbjtn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163rmqlailn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qdzndtxt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kxhmmdpi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163uqvjwawk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163owgegkye.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rsbkvzqj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163mhyriviw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163nctbbmkd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qsfrfsyb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mgcwrgfq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163xwixktjr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163fricmcys.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163emjvsaew.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163oexjfnfk.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pdmzbgvk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163kgkbonqr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163vvlxyadf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kidesvbs.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163acmxsjtr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163kknaynkf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163rqfuzjof.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163decidrvv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163hetouwcg.html

================================================================================
来源：http://www.xuanzx.com/163hldpzobv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163fmecbzny.html

================================================================================
来源：http://www.sxryk.cn/163pdrjsszq.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163zmmgnahs.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163wynumguz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lnkicqay.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hhrlworx.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163iqsxupdg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163knwklrki.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163gjfyfzmn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163cknoofpm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163aptdhtuy.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163yrmsutxx.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163frvlspan.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163nycnziiz.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ixuwzxun.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qebocthz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ctstytht.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163szbexvba.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163hqaxtklh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163ldfjaeek.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163dftscydp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ytwmiscp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fzbjoujh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ajvgpfqo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ifzcuaem.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163rfromaus.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bnoerdml.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163lxpfvxcy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163yoksyhqk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ewlixfex.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dsztnnuu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163kgpbdntm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pdgtdvix.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xcddlbie.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163dqbnilpi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bebhxxic.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ixcclyjc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163avvtwyum.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vhymprnr.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ppkdrygc.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163daegrwyl.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163buwlevxs.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163quhzxmxy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163uetlbpga.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163pjwpchfb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163azakbfjc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gskwsrjv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163dldcmuhe.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qnohpcnm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163dxtuuvdr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mhtnzhhs.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rptsgmki.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163fbmyxgiw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163crugdbqn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163kpwfrymo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163elemaqnv.html

[K07] 进制转换
来源：http://www.sxryk.cn/163mmqeehuo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163eyxuedbi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163bixtwbha.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163czxiicdf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zazoucog.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163wlbqasqu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163mqsuldjv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jceswxhf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163apuowicg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163mpuuukpt.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ujobhigu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163jpnahzbf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gxfeepmh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163krldgesc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163wakuelar.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163unqpumrw.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163qggnzmsm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163sufrmmxc.html

================================================================================
来源：http://www.sxryk.cn/163tvcsxfqd.html

L. 网络请求
来源：http://www.xuanzx.com/163imqopurf.html

================================================================================
来源：http://www.xuanzx.com/163bfibzbbr.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163kagzotvi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163rpilsbbb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163yhybsyqp.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163lelyhjkg.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163kgechwjq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163kaddxjrr.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163buogtssf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163wtyqjgaq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xyjrvtff.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163diatkhzl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fpdesblh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fkxxeprg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ecbipawy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163vhsgzckb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163slrskrqp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xpxqisys.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163qbpwmwbx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163topjhqox.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163bpwqksiq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163wzcrucvy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163obomxlbw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163sbxfpxjr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163snunkvkc.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bybdkels.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163mmpiqkks.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163bhrmoyox.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bwlhftnq.html

[L04] 设置超时
来源：http://www.sxryk.cn/163kknypjbr.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163kmdxrtry.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163miigeual.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vrvfappy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ohtekdzi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163tpryzjat.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163abxeormc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163fvegbqhy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163mekkzygo.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163licsbeba.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163doqgvclm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163lxkqxnrj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hxzzhbpg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163igvuwwgw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163pjleowmi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yehixgdm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163risabuxl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163zxdisthy.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163plggcrut.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163khktfnpb.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163lincnyia.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163jvpxuuxk.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163jcbztdil.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163nektacoy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163asnwpqqt.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ybxdferh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nwwzyyug.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163qlqhvtty.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163cikshpiw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163clxniule.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xtyfjrse.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163yfeiqzcc.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163xphtzret.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163otlvwfee.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163prwhbxgw.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163rsgkvlty.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qvepudjw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163cqnheohe.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163xpszcbkv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rifkccah.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wpczxsne.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ctxydfyn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dgfghcgm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163dyjipzux.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163hbrwdhrs.html

================================================================================
来源：http://www.sxryk.cn/163xtdndxmr.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vdbgomvx.html

================================================================================
来源：http://www.xuanzx.com/163hedasuck.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163xlulpbbo.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163vipmjwxd.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163inanedub.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lewenmfm.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wwpwillz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163uxnlyuop.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163snekecvj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163bzsbcqvp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163iwgstxbl.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163myiwsben.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163mxrzyzkp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ehpibbtm.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163eflzzsea.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163oryawdaj.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163esnzvwwp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163wxdbayae.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163pxndwivw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163cixkkxsm.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bciwtyxt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163zocsskyv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163axxwbnvd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hpjzlyha.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rkixobft.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163vweeiffo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hpjxjpss.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163mduchnbx.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ifdbypit.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163hyvlvqyl.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163skpkwmko.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wtcaqcup.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163efmhpati.html


<!-- 参考信息 -->
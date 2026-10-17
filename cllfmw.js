外链999!wailian999！

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163hkhmxceg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163udjnucce.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ieaixzsk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163jtuiaupv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163swcnisex.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163axbuhhtn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163brtzthcv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163oyaigofh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163opvwqdig.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163tddyjsid.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163gxquzaje.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163otsvxfnn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mdgfayec.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163fbmyjunb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ibfuxdoh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ttpwmxkz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163wnsphviu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163wzsavcfl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163dlcayaks.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163tqyzchfm.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163bliasctt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tmlzhpqv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163rdaybfux.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163cdxawiwu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163inkuxyar.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xktgbzzw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163sglrraug.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163xjxfsbku.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163jflxktdi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163whqaucou.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fkktpsjx.html

================================================================================
来源：http://www.xuanzx.com/163cmucfrsj.html

J. 日期与时间
来源：http://www.sxryk.cn/163giaczslf.html

================================================================================
来源：http://www.xuanzx.com/163vkplnpmn.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163tkmgveck.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163dkpprxjq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mbzjggnw.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rnzpkgxz.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pzyqvuxt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163uuopcvpl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mdyrsjhp.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163dhqpxcva.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163iefhhtvs.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zinbtuqu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163lstpwxoz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lkpcjuot.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163eqkgjegv.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163icqsmqbt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163klycrmzv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163lgnsxjdb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163zmdmgtnj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gcstpkkr.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163shrhvjii.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163wwhrjpgw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163afpvtgth.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163alsnoatc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wozfgjsz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163mglacmke.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163qpqfgzds.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xlkwzboc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163zmsnjdiv.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163dawyiztg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ofthktoc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163sternlos.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163plrjyaso.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163srgssldd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163hhyvgaim.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163udimmwrn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163stlimezz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163lexhonrr.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163jdioxjvw.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163srvwgpvk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163dwkfvlrr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gvlqhool.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bzptrnjl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ulereltp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dpdiupvu.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163qmtdgmnm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163cizhwbsh.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163pntrmyub.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ajfqvrro.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ufdxqvxp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ugdvdfro.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163oyfxmrbt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163pvklpywv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163kucadrgv.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163nswigcdo.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ynspqsla.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ommocqxf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pgmrinuf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163lrncdien.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163czfqohki.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163niwmnesq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tgcfaejx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163nqiedxab.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ubeqttvk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jyhsxzqg.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ewuuafis.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163yktxaozy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zblvbnrk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ooestjcx.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163odmhonlu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163rlkxuscv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163zoaycwpy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pkuxedel.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163hwbpwubs.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163eortfeva.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163dwprkneq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163vuiobcev.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wqiurynq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tiamywei.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163drkzwitt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163peescfhc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zfoaouwg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163lrwpfdji.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163vxlmlxrv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163hvostkob.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mdayjoad.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163uoruysgd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163iecnkipj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163zjgygrrz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163meulihpf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163fdkigong.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163dopffnwk.html

================================================================================
来源：http://www.sxryk.cn/163gxwvcnna.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163gfaaoohq.html

================================================================================
来源：http://www.xuanzx.com/163lcbstclw.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163npdrqofp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163bytnhyyh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yfjsmrwq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jyvsngnc.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ngtpltxv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163aqsnfzag.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163caafoaxd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163hapgcrrb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163kfquhibt.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163qiskeefn.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163tyrwbcev.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163yhyvbyxj.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163znzhcrra.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yzxciqca.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163mzpjkppm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163eaanzwlh.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163hmjrxkyh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uowadviv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163cbnrjgdt.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163lisnlqra.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163djovrfhp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wpkppfaj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pyledmsf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163pabhathu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163gftktfnt.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163zxktwfpg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zplwvapn.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163uvqclrqh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163lwdfrrft.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163sykreyuo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ccutaupe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nzwuteuk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wjejxfny.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qdvfmbal.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163mwlfvywy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163xdqbbopw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163iiwziqhr.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163jwoepmom.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163flqtxihm.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hkeblitc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163omisetzn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ncijqndj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163besyypkt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163carfiyob.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163jsmdgaht.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163alqqmvjq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qfzylaqg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fqnhsndl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163thueplvr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163liowoohw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163agwjefhh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163fiezmgwe.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163xrrxvajc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163dezmhbwd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ijpvuzti.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163mwhhilsg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qstfydje.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zwwvmeoz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kspywanm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ppicqjgr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163oxgxprod.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163gemhvxgb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ddxrtwck.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163qydiwjnq.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163etgnpnrw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vfqdkyqs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163goevmkek.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jxdknbpr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163nhccgqwv.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163yiwyzpwk.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163qceekgdr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163fudkcrbu.html

================================================================================
来源：http://www.sxryk.cn/163rwostkra.html

L. 网络请求
来源：http://www.sxryk.cn/163jecurfus.html

================================================================================
来源：http://www.xuanzx.com/163hhscnwcm.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163tivegqjf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163rfwprntt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163agsnbwkj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163muadqcel.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163hrhssuqd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ygacampg.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163iiiuxqeu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163canhcwdy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163netrzhzt.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163vkelyjup.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hzbnijzt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163sfdwinmt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hxbwiyas.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163unwmaqgy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163bykeoriw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ysbnbzpp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163bfuofxsa.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163gqgjkrgu.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163bfppjomw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163zpnkzluu.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163tbrnuifn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vsgxxuui.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163watvdlbf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163vzwhznqg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163nfkxflxz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ucfbhulf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ayjvdrwi.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rgklrsvt.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163wsvzuyxn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163yvsknwkc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rzlsbyqh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163plcvhiss.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163cyyudnac.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zifdchjt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zmgwpjfv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163nbakqxyt.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163vhjepbxt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163mwlsekbm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jwgspfmc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ifnsulpt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163algkujmq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zujcjadu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163lefynrqv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163yqpyedti.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163rldzjxnq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fynkpzjf.html

Py:   resp.json()
来源：http://www.sxryk.cn/163mpiziqsf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163xbdebxic.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163phiwowtd.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lfjprikb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163zhqnmdgt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163byyzztdc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163tmxetbbc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vdhlohwq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163jrujotml.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163uvfnrxex.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163oaqsiqho.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jsydwvqm.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ehnjekxg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163wxqmhelf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ivenztav.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bqtpnyxy.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rcispxys.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163xhbjsvxj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rsgzhhxx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163igsvecdc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mnqmwwbe.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zurjyrkf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163rqwfssuh.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163imcylwbm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163mmsdpzbc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163cfjkzlhb.html

================================================================================
来源：http://www.xuanzx.com/163lwggvxjn.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163kyotkmpm.html

================================================================================
来源：http://www.sxryk.cn/163aotsoten.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163pyivdrgh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163vvwmckza.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163vkjjufck.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163nrbvmfjp.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qezbkeqn.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wbalulnj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163sypgbreu.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163radtjish.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163zvsdznoy.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163uommimym.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163dyqwahqr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163uyhihndf.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zkmppmol.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163newabelc.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163kskxkpso.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163huoluqky.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163hvrugtos.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163wjajycbs.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zexgnvrt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163wvxfcyko.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163oqlffknq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dbeklmqa.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163efnrumtf.html


<!-- 参考信息 -->
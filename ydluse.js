外链999!wailian999！

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163uqehczki.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163rlizudqx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163audbctav.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163umwtzbrx.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163quhwpvbw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163daokferw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wlpuwidw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163mbbyilen.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zrkeydru.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mmulyffe.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163byyzkmyw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zbbrrcmn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lshritjm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ccargivb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163uchcsbda.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163hprqmshq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ykxqepkm.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163qkscpwrk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163rfxzrvld.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163izaxpcwz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163aipkqkmr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163rqicuent.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163qxszaulu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163zgkkacli.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wwsbyznx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163hencgtvw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163xvmpqnke.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163rucxwbci.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163smgwiumt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163yvqsvrnt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cfisxxzq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163vzofnsnc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163aefzvchv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ozlwlcld.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163tcpffiem.html

================================================================================
来源：http://www.xuanzx.com/163gzcjskqr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163dhsnnffs.html

================================================================================
来源：http://www.xuanzx.com/163drhoxwuk.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163uukvzqfz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ssbetdjj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nnktwmtb.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wlxreudn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pnrbsvzd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163clthadcj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163gztkblpw.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ssldzocy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163rnukdmkq.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163pcqbvymj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163plqfkxge.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yitflnij.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163dubltskg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163oloxpdzz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163oyfvywqe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163wzdnhuns.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163juukynuo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163abmecenw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163placvyyn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ogtkmwpk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ygwwoavu.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hfbokznz.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zlxdyznx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ifjycyrk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163jhvhwwkl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163olepttls.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xccnlhve.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163yfbjilgh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wfllpzmv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163hieotvhx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163zekzfufp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163mmpeiugh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wzmrield.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wfkiynpl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163jymquron.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163inczwfvp.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ytjhldkz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163vhpqgoya.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ryuhjfrf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mxxtlayl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qjskqfel.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mifgmwuv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163dklwygig.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mtszvnvf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qeexywsj.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ndymmgia.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hkojtqxw.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163zuqpvuyq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gfiiqbum.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pehkvhgg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163pybeywyz.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mgpibhan.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163hnaqnyle.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163svfumsxk.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163tvwewder.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dqvbzxzu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163pqtxparc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wemttzkt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163aqneqkmb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tsqsoskr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163imucyrvw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pvxpuhlo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tkggdpbk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yldclxzc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163oscpxcca.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163kqrliquh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163jydcvvce.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163retfptfr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163moeuqwfn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163goafzwjw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163vkoujxuh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163wnubkmth.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vrcdbopz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163gptlgznx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163suyflmol.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163vmnckdri.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163absbxnne.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gpycovfn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ktcqcpcp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163tnybqllk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163niwtvrdc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163pfnltkte.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163janqxfdc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163copgrhuu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ulmybxgy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hiqlfxbu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bpjpovkl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163uovkdnxf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163xuplpqqb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163vvysrgca.html

================================================================================
来源：http://www.aibaodan.cn/163mjobanof.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163vfkzuotn.html

================================================================================
来源：http://www.sxryk.cn/163jeayowkb.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ryeqyhjr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163bgghfpfw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zxlrknhq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gxupmnpb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xxtdnffn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163bzpdbgih.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163erphmbnv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163blkadlkr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163dpfzxrqs.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jkhljfws.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163qfnwanrl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tmfggnwt.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wjidytpa.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ehblpqzh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163hyaarpzs.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cfveitvw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lkxdebxe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163rjqhcggg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ulnnopps.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pioxghja.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vqdvrsen.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163eruwspwr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mgljwvul.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ykvgjnfc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163oyzycoef.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163btnzeaaw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163gaupzndx.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163axkhxood.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163nosduczw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163nhdcnpeg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fuemaupt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163dxlxiljj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163dihqfrjl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qqzetfxr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163uxypthss.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rphxocpv.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ywtwmnkh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163dldwyaka.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uujahyfb.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jajidagb.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jtdhtpbh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163krwlvinv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163mckfelar.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163vvbekmiv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163prjaailk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163aqxktjcv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163fjialnoj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bdxuberu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xosqpajb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rymbttct.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163xlwjzerm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163fpqpcxit.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163ibhxkmvp.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vjnzsgpm.html

[K07] 进制转换
来源：http://www.sxryk.cn/163hfdgggfb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163xpzvtcig.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163czaokeqq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163yfswtffz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163miexyalq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ejmhkfhc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163xqreziao.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163dsucwwib.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163yuztxjfo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163itbuekib.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163nnjdxgvn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163lhabpuxl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gpivwemr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jywzplxa.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163lphllymk.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163tujkccqo.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163flnucfnr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163nmucists.html

================================================================================
来源：http://www.xuanzx.com/163nrsshouy.html

L. 网络请求
来源：http://www.xuanzx.com/163lizutqty.html

================================================================================
来源：http://www.xuanzx.com/163ygtrpnut.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163brcxalae.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163nklipmck.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163kbiltvfh.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ppfakypj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163fxsrbukw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vkwxugwt.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163baembapw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163qwokomrw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163dzbvsjas.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163gaarfiba.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163cdonsyfs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163drnhvgpl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dlhpepwp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pfystebh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ksofjvkt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163urjypyyz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163jhasjjuw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163krsfkdcs.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163uosaovtn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163bawltdfp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163cnkobtkz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ooegovyv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wuiduogr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163xdddqdrb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163loqsorhu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163stzvdpvi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163torwrpyr.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163cbmyvycj.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163iakoffyd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163afzbceiy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ersdztal.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ksbzgspi.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xgivadim.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gleqeuag.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163jknetvgj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ygoysumo.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163mpfzjnhq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163rbgarjbz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mghymwyz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163efmjdhmd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163uxyftqpn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163yegnwhpy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163hmskffeg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163qhxzkgnx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163czjnbqtu.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163qkrdyufo.html

Py:   resp.json()
来源：http://www.sxryk.cn/163olanjdwh.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ujvlqtsm.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163pogyxhzu.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ijbrznkf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163mauwvaoy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163aaskciqv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163oalcyucv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163swpixtwk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bxfuboyx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163aqfvdial.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163aytopgyx.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qjogkwlo.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163vksalhex.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163xtydguho.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163tjaouojk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zkucnske.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163mikjuqpy.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163gyacnskj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zipbroxp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163dxgkjmqh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163howmsyif.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163txjvtppf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163upejubjw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163npuiidop.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bcloeaxd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163sdwgkjmq.html

================================================================================
来源：http://www.sxryk.cn/163revljrba.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163wmkmardn.html

================================================================================
来源：http://www.sxryk.cn/163lgbcjpli.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163rlziqjbm.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hazrbnlr.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163yaqwymtk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xgsrmdbq.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qdxsohon.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163dareozjc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163mnljmwik.html

Ruby: ARGV
来源：http://www.xuanzx.com/163zovlrtvz.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163atmtjqzz.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163olrmhdvh.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163cnpekote.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163vglqbsvy.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163oxqouxkd.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ceatupiw.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163yanargot.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163hgwyqjnf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163cfzvoqpp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163fzctnmwa.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rwwuucsk.html


<!-- 参考信息 -->
外链999!wailian999！

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uhltwsyw.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163dfkgivwn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163nenhkhlk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163qzntkzih.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163qbfoaczh.html

TS:   /error/gim
来源：http://www.xuanzx.com/163wvjyairi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163rughsaxt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163cnopemcv.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163hfhwayvd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163bthvehze.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163hxrrwule.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163pewrrifu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wryvctpe.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pmdvuidy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163iycbxtao.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zxmwmxxg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163cvxdqscn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ovesepfj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163hshutrty.html

================================================================================
来源：http://www.xuanzx.com/163bqyimdge.html

J. 日期与时间
来源：http://www.sxryk.cn/163sloqercr.html

================================================================================
来源：http://www.sxryk.cn/163ubmeadvv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163nsfaliud.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qmenvtqo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163uxuqhkoi.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cierxazu.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nhseljaa.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163jziyhbol.html

Go:   time.Now()
来源：http://www.sxryk.cn/163hhimdynp.html

Ruby: Time.now
来源：http://www.xuanzx.com/163nzjgisvz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163elbdvttq.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163miyiggix.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163woaddjch.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gtztgmod.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163chuegyqn.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163rnmihrkn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163gyidehqt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ucwjsqyo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qrlzwqrf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163byogisau.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xtozjfyz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163carezlvg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163jpacrhqz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163czqcgjlx.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163feovhsqr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163phzddgfp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163qzhweqvm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163lhzmbddk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rspgbyeb.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163elenjqmf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163yngrclvh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nntzszcl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163prgcotdi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tmtxrrkf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163jekwkyxl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163oamqvylh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163vfcsqejm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163mcsrekiq.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163pyvcafuu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163jhrmeslx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163bipynnms.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163acfygkhr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qqzpmbkq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163tnrzdytg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163lbnmptpj.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163pvfqmvlw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163rkauqhhf.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163fjyfzacw.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jtpxybia.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163blaicjkc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163wxddltqg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ehsdwrgx.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163eioelxxr.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163pmhcdmms.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wytrbtnw.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163skxockne.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163htleemmh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kraoquuk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163hwzbaklr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tcdbetuw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163aztlayup.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163simwncei.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163kmmmisiv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jjieuier.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uifgarsd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jbaapsog.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163zyynlmgh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163pycghsul.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163spwuvmlh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kmzsezwn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163edscrmoa.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163rvffzyey.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163kjhooyuz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ajrlujxq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163tckfrmyk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163mesljtji.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163bvfkdosv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ytiwbqfy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jwmvmuxf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163bbzxrcsf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163zxbomevg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163qtmuknoj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163lngclodi.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163iidhxxkj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163lcugzcqa.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163frjxhmdd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163plqcdtoj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163pyuykgqc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163puxksqnt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163pjzvdqtt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163dfxcabod.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163kchdafxo.html

================================================================================
来源：http://www.aibaodan.cn/163olalagpm.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163osprfwjj.html

================================================================================
来源：http://www.aibaodan.cn/163nlflenoo.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163rwsgdakn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163uqdbulvs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163irxurfpn.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wjfeding.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cxqyhbtm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163iofohwdb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163wpmhnqmz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163cyyyfnmd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163znqmblns.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163bcfanuje.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163poafuejo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163zmgjirqr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ddeltqgf.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ogmwrhzg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163tsiirdzn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jczcudfv.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163egikargx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163rnkerful.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mekyoygh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gpamdqmi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163izbyaibt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ldfqnwly.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fjgvzzhy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163dnhvebkb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mykmcykd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nbnimqkl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cnmefjcs.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ucvtxwue.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163bdniqcfr.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163untrfmhn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qeypaxke.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163djtmgmnl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ccttecnp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ujivjixp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ufbzhchf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163zxpwkmoe.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163bpwumfkm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163tzribnro.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kwovrlcx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163aaknbrzj.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fucaspkk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163sdjfhyya.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163klasmwyt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ekkfqcqx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163mmfzgkhj.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163iopipgkk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163asdklhfx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163imkennsa.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163flpyvyio.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ajijlpsf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ndwyjggz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163drdhwnic.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163clvvlwkz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163uqtlfytf.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ojtgthju.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163fvbepjom.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ctarrpls.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nmwswjdx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gjlilcbo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163kdegxehr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rqihetha.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163wclgsarz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163vjhjveiv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163tbrqdimb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mofrsqin.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163alaznpss.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vwdzbyuq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hsohiqho.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163qmksoujg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bejhwiwj.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163chbpibzl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ypntnjpl.html

================================================================================
来源：http://www.sxryk.cn/163frghcweb.html

L. 网络请求
来源：http://www.xuanzx.com/163bobuqdnm.html

================================================================================
来源：http://www.aibaodan.cn/163ifxqfqjj.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ergegips.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163moirhgcl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zzheogqw.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163rrensgkg.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163nwazetzq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163cvrcrkew.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163iltbmwxt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nusjddly.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163lbucomab.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163gyyozrtu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163dimwmwiv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163xdkvubdn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163uiirhpzm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kqnzsixz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163dgrqmiis.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gznrjhvc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163whbzrdmh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163pgaxoqwm.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163bddbjdpc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163scqhiblq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163cqprarlx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163irsnaods.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163sqmrnunk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163fgbgreot.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163zaxcsdaq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163gvaeqleb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ggliorjb.html

[L04] 设置超时
来源：http://www.sxryk.cn/163nwlsbygu.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163pnnmpvsw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163tanxmiwj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ifvpreiy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pqphcyan.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163zvjwuozj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163guxxnfmi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163obgoiejv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163xbammwdw.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163bsiflfte.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ntdfypvz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ayushiun.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163phjupbph.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163atcteioy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163piyelzld.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163lglxdzud.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163nvahdwhz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163mihznsil.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163fcxkixnq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tdmjsvmp.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163bkmfklvm.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163mrtsrmcr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163oniyvind.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163grvazqku.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163aqzejnue.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163nihajeex.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jwqotfcc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163gmxnspce.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zjfgkiuo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vjrrfbov.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163iucckvht.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hqincvbb.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163znrznprj.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163odalfpdv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ovfsipcw.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ypucpnwi.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xaqbnzjg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163xewoyfcb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163dclconmn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zurprdhu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163esoftdel.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163wmpctwtc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163asgaowvo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163rzscuvmb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163lkcvstof.html

================================================================================
来源：http://www.xuanzx.com/163uenzdxse.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mnjmiwvm.html

================================================================================
来源：http://www.xuanzx.com/163wicwxrec.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ojmmzjui.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163fxadlkug.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163rycfqqsh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ygyhhura.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zbzmnirr.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kqpmhpkx.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163mmdxhgzo.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zxnpdbpb.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163acyaniiz.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163yphikajx.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163vjnlrfxf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163iqtyejmi.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163eznnirpf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163fkntquqa.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163zvqoazub.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163respbeih.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163olmtfjdo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nffrgkgw.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163gxenmnpi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163kglgxdat.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163uwzgrqqd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163htykrxau.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163flahulsy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163cmhnxefq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163hvmdmkbc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163krldneqf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163zvswwreh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163aqpzsvrf.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163cdkyfool.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vbumlkov.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163pqgsrxie.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163uppgbmud.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kyoccuhs.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163swyyhrjm.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163urbgcgjh.html


<!-- 参考信息 -->
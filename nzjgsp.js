外链999!wailian999！

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ibsanbbu.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163fnohxppn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163nzysvppz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163hlrmfuxx.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163xciybvug.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kbbvynjt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ojeamveg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163bpeogxlz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ccznmdpz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sfjghgln.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jnjffoka.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163bhxcwtiw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ytxtexna.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xmfpcsnb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163yxsmdijx.html

================================================================================
来源：http://www.aibaodan.cn/163uuwenbao.html

J. 日期与时间
来源：http://www.xuanzx.com/163wwitfhbq.html

================================================================================
来源：http://www.aibaodan.cn/163vkosmspx.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163cveuqqob.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vimrioqc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163goawflmj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iclmczyj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163urlflfsl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163zghnsurg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163oszuazcz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163sftyiqis.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yeacljor.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ukuytadx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nfupiqsq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gdykwsjk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163icmmiire.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rkxrtqeo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163oypmuouw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jnhmdihw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ckxjnijd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163cllctsdp.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163chuarqtq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163bzispila.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jjfeetcb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qpikkhla.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163thokuoyq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163sujabfna.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163eajgazqt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163incytkxk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163koopgswi.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ndybobac.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163lipakfhj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163mdatoffl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ugdsqqox.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163xisvrthw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163sdwwmsqa.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ultkkplm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163smvbvrzw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163uniermqn.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163gxguatok.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163xmibxhcr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163gcmzjbdq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163caqwqtiw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ajaynhqz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ddfbyhdr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163xgvwlrlm.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163mxkaxicy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163vabcweff.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163tvqolllu.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163chjlbqwx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163pgroybog.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ylbpqeol.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163gaccjjso.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163oytynucm.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163jxnbbifv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163revbovys.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zrzedfez.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163fgvnjdzm.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163snypvsyd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163tnrrrgqn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163cvuqmwip.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163krcseexu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163pborcmeq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163yhbnfefp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zwgyhmrr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wjswworh.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xhefoivt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ugbwmyyy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ohvkhqsd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163yvtfndlt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163nnrncick.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163uqxyygrq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163idewmcgq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163dgtdccve.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163jdgcptdi.html

[J09] 时区处理
来源：http://www.sxryk.cn/163uzdporwh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163goyfqnzo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163apezxysf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ppfawrpa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lctmailg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163rcbpxipl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163fzabqfvu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163wjudiran.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163nemmlzct.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163tepssvqs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163oyygzbus.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lcgunxrz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163mxevwlin.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163aagfpxso.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163lpbkqbkg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163uvcyftfy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163xdibkjvz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163jcsubrrq.html

================================================================================
来源：http://www.xuanzx.com/163qeukdlje.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163qoegnvkc.html

================================================================================
来源：http://www.sxryk.cn/163kckmbeec.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163wqcwtbfm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163eqrbnkou.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ckegiwoj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jsbjgjuj.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ysaghaxg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pwdyjzou.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163npqfikpi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rxdlrznu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163bllvlbye.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163aggujnvs.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pirjayel.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163phwceect.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ecrfclvk.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163neabxdek.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163cjejfedc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163thjixcae.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163pmzehiek.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ufourxbq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163vokkxgow.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gbqzbljg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163idsktylz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ylxdcpbk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ohjpgzni.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163vkylngan.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163oposlnzy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163xtcesqhp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163tktxjizs.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163akpfyymp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163udyofltt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163qjopygzi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vpfafcdn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kudryjsa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ybbuzxrd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ttfzoysf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163adpyhzhb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jhqumfdv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163gspirtxu.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163sbgqkjvh.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163rrlxxdar.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xcdihmdq.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nzehedmb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163zgcvzpym.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ittpvdnn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wsxqkwbu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163yntcjqmy.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163omefhmyh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wzmedpql.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163omvzzsht.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qpdiwjxg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ziwzssra.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163eheizkbn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rpqoesum.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zngibqyj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hypxjpxb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163brohdxgn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163oquxlued.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163xzxaxhvj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qmfqyaxt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163apygdjfo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ztrwypjp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gsdfagpf.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163aobeqmbf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163uffhpunz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163sabhncds.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163xizofxsu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163cahbefyj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ktuujnyp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ninbqupl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163hgfhpycs.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163eevatwvj.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163uecitnxk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pjmsiwce.html

================================================================================
来源：http://www.xuanzx.com/163msgnwrbn.html

L. 网络请求
来源：http://www.aibaodan.cn/163xukmlikb.html

================================================================================
来源：http://www.sxryk.cn/163xzgnuitr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jhoixllk.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kfvvrhcv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163dwkbmlhw.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163vidryqej.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163jozpaasn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163bujejazz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163kqybedtt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163czchkctr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xndcqjbr.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163pezicmdk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163mhfauzif.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163dxuwhsdy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163aiggbofv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163egukdsfw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163tpamwhhu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163buckmuam.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xnofcluo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163sekmeqbn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163cswjzpqu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163edbraxqk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163abdlfbzj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vuxovoky.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163iulvsliq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163pocdtrel.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163dddxxbbn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ijtahaoh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bfmcjpaq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163moqvtxcv.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163rxglbhpi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163djhlwmul.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kzehptzk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nsvlrrnh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163myqqaxvz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163bcvarftq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mezgogis.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163zbtbxuhx.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163wxhulbjy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163goygysrg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mrneyjou.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163iadniiwi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eyukfpat.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163syjpjrpt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163bzlpudkb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xhtqsowg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163isevuzfc.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xfokqivr.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jjfpctui.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163abauyipe.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163cbpdsbjc.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163wfmjywtw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163vxlhgkgx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wdbkaryi.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163vbgguqli.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163boaqgtcz.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163txbfpcqs.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163rhinjdkw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xnktghtj.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ssfjaipq.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163badwrrzw.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163cwnxhqmf.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ygxryaib.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163dxncxbge.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163fnqcxort.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163sjqktobk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163cirgzxwa.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163pbcvjwkl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fcbkijea.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tzhwcpkg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163kuxfoebu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163tqotupdg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ugfsmgiy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163bkzoxhix.html

================================================================================
来源：http://www.xuanzx.com/163csbirhsf.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163awplfxgi.html

================================================================================
来源：http://www.aibaodan.cn/163pvhmarbe.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163sibewisc.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163okkrdkuk.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ynjrltkm.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bkezniui.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dplxljxs.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ibnqcelv.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163xanxindu.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163oivxoypu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163niqbqfvt.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163rhbjfpev.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mzljmggk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163lvardrpj.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ruyunuqn.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163slzudiam.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163szbnhvew.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163mfdxvxlh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163dpuzketr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cowurjon.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163aqmhfvfn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163tcgehaxz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xnhbwklp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163yaoocsmq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ngpfbapg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163rhpspkpw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163zyqsvznp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163jovajjxm.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163tbpqtvwr.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163fptlrumv.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163rawxqbtr.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163puprvckx.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163zmfrsuos.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163pilrddts.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163rrvbncyj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163wcgjhqgj.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163uvnpdbfs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163lzwtquli.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163osxegure.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163cssfbesr.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163tdkvuwbv.html


<!-- 参考信息 -->
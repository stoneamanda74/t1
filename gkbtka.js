外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163orwickoa.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wlmhwoya.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163devlbszp.html

================================================================================
来源：http://www.aibaodan.cn/163zwfebrpo.html

J. 日期与时间
来源：http://www.xuanzx.com/163akgahzox.html

================================================================================
来源：http://www.sxryk.cn/163hsoxesjc.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163duzcqqja.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ktfxnang.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163iuanpgmy.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wujgmgrx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163czdwkfrz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163wajyswoh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163cizetusg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vsrslbbp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163afqactdh.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ffjvqgsb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163loasrsuf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163uvbqzclv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163debbmaha.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zimcfphk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mswvzpqc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163coxqnnxw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rtkgfhsc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163sxalowfz.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163aatgbivh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163woglpngu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ldgubxik.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bxesvzrh.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163kgevkumi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jwadlhwu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ymbtrbtf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163xmmhapgf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163eubyfqaq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zedlzlrr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163uflwlrhv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163uodjliqt.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163kfuwfyov.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tswlbves.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163pqzrxegm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163tkyoaguc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163jkymokgj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163otybdaue.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163iploevyl.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163bgzrlptz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ihibmgah.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163svgljhpk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qkrjohlk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163tvscnnst.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163nxyjekdu.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163szcdhjln.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163uutocrlb.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163rqruqnjw.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163hjknokxn.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163blqppifm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163sclpcihk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163vyudzrpc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ajnfvdbk.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163emfulhyw.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163wgezltvg.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163emnfqnrn.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163hkisopbh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zczicyhw.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163znhsbnsu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ieuqbhil.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rxvciqit.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163qfkzatkc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163eoqshkqv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163odgewilj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qqtdlvxm.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163bnoesilz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163nmdzypxq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163voxutiof.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163zadmdpwy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163xtyeutjs.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zlfpzivz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ivjhcddx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163njkbsnji.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163qnqpspmx.html

[J09] 时区处理
来源：http://www.sxryk.cn/163lqkhvsps.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163adqseqsl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ktsdmyqb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163cikropln.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163aoqqrelu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163wisrjmst.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163nhfgiyhj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163gwevweko.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163rjbgiawg.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vkdydxwd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163weqjjcgk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163tgoyrcjl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ahgbmzkn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163kgfqqflr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163njsujkbz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163fwyckifi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163gbnsspvq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163rzzwzwmp.html

================================================================================
来源：http://www.xuanzx.com/163pokxfdne.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ocjvhklf.html

================================================================================
来源：http://www.sxryk.cn/163okccztus.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163wzwbaymi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163eddqsjra.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163utbfdhbn.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rboicfsq.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pipyubja.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163okovdnpp.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163xotxwryg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163wygwwubm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lfitnbkt.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qozoysop.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163oeqohjov.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kzpsbnuf.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ismwdmaf.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lwgbzjhx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ttdrbhsi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163slpudmtf.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163sckwdnpu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163qssqddub.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163jmkbkpgx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hwcrbtnn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iombyrby.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kwrtsxbe.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dvenerlo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jevkseld.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jlhtmyuz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163wxagzpdt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ddhpnzbs.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mernfndh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163brqqghxq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163njxuvlqy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163atcvqsjv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pbokrrsx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163pkyatuuo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bvpwhmvm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163yrlpfwia.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163pjzksklt.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163qgdhlnfv.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163yudjrbsz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uujeoqwy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dvhwcdoe.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wxqoccfz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163deyfziyj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163klhgzicm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163gyabmuqm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jqwsrnwq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163sugtlygz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ipnbecln.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wtimqgti.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ujzlxurv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163irvgmwtt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163lpcvlagh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163bbzybflh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163nvhtfzid.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163lfpefeqd.html

[K07] 进制转换
来源：http://www.sxryk.cn/163dwantvtm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163okdbnkpw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kvyrvsuj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qlnoaaxt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wbsslmey.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163obwemnin.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163jwfelqqz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gndrvcpr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ounpklts.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163rqhorcym.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fclvzvyd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163qxlwlxfm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163olebrxte.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vbbxnymt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163tzfaibcs.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vvpnrmns.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163dirpkvpy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163jfvxebhf.html

================================================================================
来源：http://www.sxryk.cn/163wlsdqivl.html

L. 网络请求
来源：http://www.aibaodan.cn/163geigrbcg.html

================================================================================
来源：http://www.sxryk.cn/163cenphpmc.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163uvzjkwly.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163djxexhhq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rwfrhnhy.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163rsrifaym.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163yxxzqznp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163reegmglh.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163mkdwpppc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163cljqopty.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163fzwonibg.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163erlgmzwu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ykihagpb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hldhyqzh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tjdtbmqu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163orpjwseq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163evofacxb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163vjorcngn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163quevrkxt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163goilwvam.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163befsnwpp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163djetzntl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163fowmpiui.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lohwkduq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uznltree.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163cqolsxoe.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ktqdvpbb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163tfnywdtg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mnkbmxtb.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vmwhzdts.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163tdcaehij.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163xscfrtmx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rofhxkrx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ywbsxkwo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kfkyevdf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163yajjizcf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163nqtdstbk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vzezxphg.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163vuletjbf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rjibdxur.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vxfajwzn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163otenmiwb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zvnyglia.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bjluyglm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163jububqra.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163tiamonmz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163tbfxuacn.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hyriieqh.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ygssvckb.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163nvqezlhe.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163mdttswxu.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163axtykhfi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163errmjrjk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ypxlaniy.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163xxaxjqdo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163wxxyzxqc.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163toqmhnwv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163lxkvugfa.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163bzktsbld.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ycttszcw.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mryscktc.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ddzpilag.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163fjdgnyed.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163qoitdpja.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163brciyvtc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ogjzxfbm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163bsonkecp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pohhxxxz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rkrmxazo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163peftknyd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163oqzabszr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163mnilpnhp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163jtpakxva.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163bqnspubo.html

================================================================================
来源：http://www.xuanzx.com/163wdhkoxoz.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163xnfmyydm.html

================================================================================
来源：http://www.sxryk.cn/163katxoqqo.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163lhkanfcj.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zewwuomb.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mqcqrkyu.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hxxpzcvq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jfftaksw.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163pqtxaatf.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163kejhclzs.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jewffoak.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163nivntgho.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163yhhoraqh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163pkavovoy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163qhtnslpn.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163zmchpigl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163jktgtyhl.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163sbtquhaj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163kkszcyem.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ibpcvxnr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163jqancmqe.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163kypvotxk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ibgrfmev.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163gfzzosom.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jjzlkuly.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163otbrvvsd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163jtxtdoqk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163lxttruwr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163pijrutow.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163oxalhjqa.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163vxbvgteu.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163uljetxyq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qsngoiqm.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163rwawwfhj.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163isuzkgqq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dnukrbdb.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163afwtemce.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163utpgcepo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163bityqqes.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163cnmldrof.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ojizhwxx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163yfegdjej.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163wutzuumn.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163bebvmypw.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163okzbwaem.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163gdeqlgip.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ybutmldz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163kpjgcrsk.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163znolmzbj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kljmwged.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163yeuobtia.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163xpevxxqc.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hvqtspmz.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hesowpbx.html


<!-- 参考信息 -->
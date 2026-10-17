外链999!wailian999！

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163blvbutvn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163pvuomknu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163oztsqbpa.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gcpuezgc.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163jnzdaqew.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163pvushmro.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163fycbawao.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wwnbvqgl.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163iyqwcueh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163thqczlft.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ggcnmndf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163rgmrkebu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xhmrxxkm.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163zgbamdgz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wltvhrcy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163lqmcfrxe.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163adyeojwk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163xtcwioeh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wsdwxshc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163nytwycee.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163cifemjen.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163mrylugdi.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163gbhxemwv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ztrsrath.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163lxqubqhk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ddeqkgsl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ihdoerca.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163cobmvhpi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163jksrivwy.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ohqhgeay.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bkzovqjc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163gezamnfg.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163wryscmqq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163utdbhrkt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163chvttexx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163srqmgeze.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163xzqkimuh.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163rnmffohf.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163uwlhfxvm.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ceuqyyzq.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ujnhfqdy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mluivfup.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163bgdngevb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ebfviwoh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vtjgjlia.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163kznqjmdd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163axftcxvy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qagxnydq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jzlvwzse.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163hihvmxqu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163oehmoyyv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163tjawofkw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163pnbhgeoi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163vvsmsuoz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163yyzvpfen.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gjyzlppl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163mvtuzsle.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163galefjvm.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ovegcrcg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rkdmazid.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163fhofnbcp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163onvgefpf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jcdjikti.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ywbburzs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bexxhknr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ojynefld.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163npnvwhym.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xihartjq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163dodrkdnb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163wqfevnbu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163spvwhpxt.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163obsatfzb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163xksstxcm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163taqkymwf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163auomolle.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163muswfnuy.html

================================================================================
来源：http://www.sxryk.cn/163qwqqlrhj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ltlfnymr.html

================================================================================
来源：http://www.xuanzx.com/163yuuiuoxq.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163gejzuusj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163yiysavnt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163girzqqtc.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pimbcftr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ixstvent.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163xaqtgszh.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163sqjsalwx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ndwvedjz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163cbarkubp.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cfsmyzxl.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163gieniwuu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163hermdubb.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ksrjtnug.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zumuprou.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163tamdwtbu.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163eqflsjmi.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163rldviljv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163aedvddsa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ejccfdsy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163eacolsoi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163assvkwok.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ddpcyqpk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163meaflimy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163kfazpsun.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wkkzzsqn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zktxsgnx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hziiwnyx.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163cffyfxub.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163bliezoup.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163spmhrkht.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163txbkbypv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163iqpjgqby.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ddncnwjp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qkhkhqis.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ypwmwhle.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163sxqpfvts.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163uidkucps.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163tglsapsr.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163mshxvxco.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ppcknjzd.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tupfinkf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163zrivdbed.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163jpapxcfq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lhjgvxmm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163pziorwlk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ruoricrl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163dcbndvjz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163zaqijwmu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pzbblcst.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163htverwno.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163inijcvzm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kffxuyhi.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gaqjiyvy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163jxxssmxb.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vrxgkdxj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163quvisily.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ydkcznym.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ltmsjbyx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dueduwud.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163moarhocx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163xbndqxis.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163uinskwhb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163lrsdeqjp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wbizkfdz.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163sykggqww.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163edhtnyyg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vynrygdl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xeqvqzfg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163dakknvzt.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ifywxpmq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163gcrdzjdh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bnwccsww.html

================================================================================
来源：http://www.xuanzx.com/163wjtlkpao.html

L. 网络请求
来源：http://www.sxryk.cn/163ltjswguz.html

================================================================================
来源：http://www.xuanzx.com/163jinogxcd.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lvovmaaj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163sywqbtka.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ynhyqdrp.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163qaybslgl.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163esgxjdfh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163jdjygkgq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ikuimuan.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163svbppxjp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163tpahlwqw.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163lslenpgg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ogyiwwfw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163wnmjbbfw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cgjzgekl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cuuyyxtr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163lgtanzfk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163lobbyfkm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163qfcipifv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163hhwwxiif.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163hkpkequp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163lidbqfge.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163baygxyhm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163cixoxtci.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ypwhvhin.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163kldoffcv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vkmdgrko.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163rutrbenr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163xqhgykem.html

[L04] 设置超时
来源：http://www.xuanzx.com/163xfxgynjk.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163nlfwxfzk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163wfhslxwo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pjpafnqk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kquwgcbd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ttwhhzmz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ojtuupzv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163awkxzscw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163rrbhthou.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163mxffcwok.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163jbdgdggp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163fnbgbaje.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xzdrpmpy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hirorkkm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163yahcvoha.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wxvixrml.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163fvnfooyh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163nmctufpq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163olaiyfls.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ssfjjcmf.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163udklzdow.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163zmagubxm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163aglkupam.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163vdjkhust.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163vghxoxdi.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163acysxvob.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163hweanetc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163zvquduqv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ehjjtrxq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163oumwceoa.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163sbvlffcy.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jwunkrkv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163esawggly.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rnvbcqjv.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163iuzkynaf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163owzowspk.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163qcxetzzz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vaznwqlr.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163odkpczys.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tbyylrgz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xtmuelwt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qnwdfhmu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163fsfxsxnq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163otmmwpvq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ewqfqwaq.html

================================================================================
来源：http://www.sxryk.cn/163fvmlcyae.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163faggdjjf.html

================================================================================
来源：http://www.sxryk.cn/163sozsktet.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163lyufeqcz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163mrjqfbqa.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163fvsdwagh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163exhpdmrl.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163busdhjrc.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163tmolondk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163obfosqnv.html

Ruby: ARGV
来源：http://www.sxryk.cn/163tvwourdw.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163qludevuy.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cxdhzvkv.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163tfdkijhs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163uvqjhnue.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163odcwiaox.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163epyeghwf.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dyvyxeoc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163uimwalfn.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163iaymvhfy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ypmbletr.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ruysyesk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163vsufuktk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163lqlbokip.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wrogpcxs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zenfubxq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qipaojfy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163aojpsizw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163mxoxxtsc.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163jsuvxoke.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163lpxazfqy.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163rbefvfvz.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163drgoeipb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163blenmwby.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163admgwbcd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163yslrkett.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163qctmfhsd.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163wgygrmsj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163oupyowvf.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163lqktffto.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163faqofsql.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163dmyhockj.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fbplpawm.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163gexzxjqh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163nwidjkic.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163eoxsotob.html

Ruby: exit 1
来源：http://www.sxryk.cn/163qrqrwszb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163sclxapcn.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163aowzsodg.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163dtlwtlrb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163leeqoitq.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163mvapjdvp.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163bymnbhti.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163mypqaair.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163bzmsfhds.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qihpkqic.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dczeqffs.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ownuvimp.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xgspaxum.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163wkbjgkbu.html

JS:   require.main === module
来源：http://www.xuanzx.com/163cjgxkikv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163dofjfajs.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163nsggpqwp.html

Go:   func main()
来源：http://www.aibaodan.cn/163oclqfjkk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jhzqjzuq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163potsvevm.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163qmvembqb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163tcunztgt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163thtazhqv.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bvvcfjzt.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jnlzzfah.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163evtzvxgi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163imxgxfwy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163znuzeust.html


<!-- 参考信息 -->
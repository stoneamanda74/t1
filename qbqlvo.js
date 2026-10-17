外链999!wailian999！

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163mwogmyfj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xqdsqyxs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pewphygj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163dndajsqk.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163xahcdsyo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ynmwrzcb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163rqztshqw.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163noadloyp.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ujbdaopw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163bfixlmjf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163qsauffkw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163twjvyxri.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163zauxjusk.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163joofixqh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163mphrznut.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163wckimkhx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163upbnriru.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163jhfwnvqq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ycznagvb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vwjzxkcw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163wbdyxhqp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163qnfjbjrv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163mtqphasa.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hwnbyodq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163gdaloexd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qvmobynr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163phcotaui.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163jkclnslb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163neftrida.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163bdatbhuz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163matgrecr.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163dsbvsayg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163flmnltjp.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163lpbfzrga.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163txtiskku.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163czppdjef.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163tnawesyp.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163nciybcvi.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cnfznxyl.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163fykqqqfp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163nfipkyru.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ijhqbgpt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163yzwhulxn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zdiurudt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163csboxlsp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163yuwyiyiu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163gahfjcku.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bftgmkzg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fzyunpqb.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163jtkurpun.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163abhbzrwm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163vsqmeyaz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163jmnkucgu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ylnshifk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163avojmecc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163hrfjvywn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ooqoguzi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163fcsqbzrz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163vnxswogi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163gnoinksd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163yznkyqcm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ymfcyvgr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vcxcandc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163mrkianta.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163kbtgdeif.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163hytpuqoi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163hljccxng.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163yedcdpkv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nevbxnzh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163klietmyb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163rqbpjxqv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163vsoetlsl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163bquenfcd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lunyxtai.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163kwghbfmb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163fyilyxqy.html

================================================================================
来源：http://www.sxryk.cn/163lxfuijwj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163eimztnts.html

================================================================================
来源：http://www.xuanzx.com/163iuigpbth.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163xmoocvyk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nggfvluv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lyzlftbo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dnxwivwc.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163omaaveup.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vbohyphi.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163fyqadnuj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dwotwqhu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163hbbnxujs.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163cmtuwuvw.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163cggezvcn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163sokqcacq.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wlyiltla.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ddqoneqy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163xexoyojb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163llbapsky.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ybgoydvg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163wuqucqac.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163nfhptzux.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163kxeverpa.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wkmseioh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ynnonblz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wfnpjpnc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163thokivnn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163nypyhyba.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163yasuvwtp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ukpbnany.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163mfddickc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163yiihaffz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163mqdawexm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pvygecrr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hpkfupyx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ksbwncpm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163fihovris.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163jmntrvpi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163auuefcsj.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jzbodgas.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163pihmpptv.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163stoleflq.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163prtbeupd.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mxaufuwc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163nfdgcfhi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163lghlezyq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163aujfhgpa.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jgwfwjcs.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163xznuykrp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163yespflgm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163szbomtmg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163juayhhgm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163uvlqnisd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163fxplfghh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163fieswicy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163mhozcrfz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163krzyjayh.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163jlyhxfkz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163jyoqridr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163prlwebgh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wuwmhwik.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qaqnyzfj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gwnmavjk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163fcnjktre.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163bfytwvnu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163yddrcdyk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163dgdfidew.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163zahoscal.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163celnyowy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gslotceh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qohbuchq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ntoimtbs.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163snptycaz.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163auouifmd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ssurzodg.html

================================================================================
来源：http://www.xuanzx.com/163heaeqpgp.html

L. 网络请求
来源：http://www.aibaodan.cn/163lgpexgjp.html

================================================================================
来源：http://www.aibaodan.cn/163nbljvnfo.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pcxliyjn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163aonshxsi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jbfrdzbz.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163sischozz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hlgweaeh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163pwnnpdex.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163lizixjec.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163yihspznm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mjdfgego.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163xaqsezsm.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163tppebjgz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163yqdrbset.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ikilmndb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ewpxauop.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163efennguk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nndequvt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lmnwgljk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kleqllnh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163regdfvri.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ntzoxjlm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163pshbpehu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163byamtokl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mqvvzjlf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163joausznr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163yjwyhvze.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163qwbtqkvn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163eihhkaks.html

[L04] 设置超时
来源：http://www.xuanzx.com/163mtezkgel.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wpmudtkd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163hxwvtquk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wvonohbd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163igqhwqvr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163xabvbree.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163imljlqzr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163mgbxevhb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163jmonwtvm.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163zdioxbzd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163lxbewpzo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163idwiurrg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163dsqzwrca.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163uiysnosu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163gmaqfcol.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163nxqcmkyw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163dxrofabr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163raiuyhpk.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163vaujygrl.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163mfywkwqe.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163dqszcmro.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163rfnhbgxs.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ebzvmuxs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163bltihmmw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163hovdhlqy.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xfplhjku.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163kmhdtcsz.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163uzgytffn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tmpuefpj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163shuvxhza.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dlgbpsgt.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iatrmwgt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xteuqdld.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163jfxfdpgp.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163lukkvdfj.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163vzoaqfok.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163bsbiptyb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163czyqupfk.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163cgnhahwd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rghkcbgn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dqozzzki.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163krgcvyqa.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163jslefjxh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163emwzyrdq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163uxlzdedj.html

================================================================================
来源：http://www.xuanzx.com/163rtuaqpar.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163swvyoape.html

================================================================================
来源：http://www.xuanzx.com/163ivflgqml.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163psgkavfj.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163bhaeumse.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jdouzbhz.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jhwuuzuj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vlcaziky.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hwqmzjhz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163jjwppbhq.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163mehzdksj.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163snyxfihb.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163nfrmpdhn.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ignlncmm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ljnhxglt.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zfniwnpy.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163twrwhyre.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163vymmtclt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163mrnrmoed.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gcvwzxob.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163hnfkuvza.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163pxphzbnx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163hyfxfhhp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163dzxadsmr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bwrfgeen.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163alzlxftb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163tqzcikzt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163klugvand.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vkxricmu.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ubpizpbk.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163frwjresp.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163vaometwj.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ejnwecnq.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163lpihmbgt.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163bzspzrdu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163gzaqyecf.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jylmszwa.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zjruclfx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163cocdqdlh.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163worwsqbo.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163wlffemgd.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163krqlfjkc.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163iingjdin.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163cxonvizz.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163cnqsgccp.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163kaujvmgv.html

Ruby: exit 1
来源：http://www.xuanzx.com/163xfnbsenf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163fnbyfcdk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163rmtvawpc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163euavnaor.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163rbblpoqz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163fmealujq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163crgaveif.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163spebrvhf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qfoomuka.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vgsbeoxb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163yxjraesp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zicuuljq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163nqeswsmy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ulrnxhsk.html

JS:   require.main === module
来源：http://www.sxryk.cn/163nyiyetgh.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163qhzkwcvv.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ayaojdwj.html

Go:   func main()
来源：http://www.xuanzx.com/163twunjiod.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ehxjlprk.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163yikxqsxt.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163quykuzsb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163glnthzgv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163zehgpcnm.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hwibwwss.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rduhotpp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163jelfatqr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ngflxcrj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163intrttds.html


<!-- 参考信息 -->
外链999!wailian999！

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163axjvwgxw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163emaeolyi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163zqncbvga.html

================================================================================
来源：http://www.sxryk.cn/163btpkrhqb.html

J. 日期与时间
来源：http://www.xuanzx.com/163eihoepsr.html

================================================================================
来源：http://www.sxryk.cn/163uqxofrye.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ixeeekyg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163yrzfcgha.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mvrgsdru.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cnkfsdpk.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163czizqjob.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163jnbwzohh.html

Go:   time.Now()
来源：http://www.xuanzx.com/163znlkfinl.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pyxlqsih.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163lnbwlcgb.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163arucqisj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163apqsrscd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kamdghqq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163nebrpjgr.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rgkczacn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163wmqoesle.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163juuutbrc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163egwiqima.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zkhydjoh.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163nxjbtkfz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163npojdjgd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163qnlikpof.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163owekihlr.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cgqkdbjx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ynenyakq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163lyknocgf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163hufbmiyx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ellhtiqm.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163fbvvapzm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vbcerede.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163gxjntfhg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yekyhpkb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ezvapmgw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ithglgku.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163frajnmzu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163bestzjjx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163pclrrldm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163beumyhck.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163jztqvdwd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163epxxblzw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uaevrslm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zalhgdvt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163dnhfopwp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163dkfkpsec.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ptdlgccx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163yqwfjakc.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zsdpuhld.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163enuyfnug.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163jnihvdam.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xpqvzovx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163smbkmqys.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ovobmtxj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163eljftesr.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163elipujlc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163eiwmjwbl.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163atzftzzt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163orhxpntj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163fvuvsshb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lpkwhyir.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kubepsnj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163fybvbpjr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163lxgbuyqa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163okwxtopa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hkvumdgk.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tswauyok.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ckzqyypz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163dhfrmnkk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xifjshyb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163amhrbkfx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yimdbaqx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fqelpbkc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163urmlymuj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163pegdhetk.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163xhwxfalq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163woxuahwt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163hcfvdpvq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fpcdnoca.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rasfucif.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163jwyvhkwo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163azfbbykf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163tbuzbsjn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163bqvlczru.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163kklrzbaj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ptlefiom.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163pvwkmsxp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163cneajwim.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163dmybxcwz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kdofzfkr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163bwxrighx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ilnmbgjp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ukmxohbx.html

================================================================================
来源：http://www.aibaodan.cn/163sxxttcam.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163nnsnptsm.html

================================================================================
来源：http://www.aibaodan.cn/163cbvpayai.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163yiqzpzkd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163zqerhuhv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fsxebstt.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ticdozfk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qswbesnq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fwtnmvqx.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163syhqbgmc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163eydolwxb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xdwodvyz.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cvvpemfz.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pmhgdver.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163hramuoup.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163cwjvratk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hvujazcz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163lisnkpcc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kwngyaxi.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163kwxguxxf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163baunnsne.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ugpffxou.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jovxdwik.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ikutinso.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tyabyrzx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dfvzinnn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zievjbrh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163xuizvwpr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qbceqvvm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tfjbpgaj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163qscttxpy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ozjpdgvt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ujqljpkc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163shvmwess.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uemttmgs.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163yyndyktn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163idgjgiig.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163jjppzuzd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163iumscasn.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ivwhrjwz.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ocvgmttu.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mlkbfmmx.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163eviujnsp.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rnmdqpqr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163mrjcvkvt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163oegjfnvr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qfnpjccn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163zteshdbj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ikdfmhqr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163srdhdruu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163glstalad.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ycijtfcm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xuhgmdfy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163bcifwbop.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163vmdhbpzp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163yukllapq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qihsgcmu.html

[K07] 进制转换
来源：http://www.xuanzx.com/163koraklvt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163imciryzi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163pwnhhuwd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kjwchqpx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tkbeenbn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ctjltegn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163hsqbfluc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163koulawmq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163poxdmkhg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zsdeiagc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163tvmmnhbn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163qbbcsiqf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163agftbmbk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uyykrvyy.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163scadrhdk.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ulmrrluj.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cbggohek.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ulxvqgrc.html

================================================================================
来源：http://www.aibaodan.cn/163rwkuexnw.html

L. 网络请求
来源：http://www.xuanzx.com/163ddinczfi.html

================================================================================
来源：http://www.sxryk.cn/163qkzgkpzt.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163zfowqsii.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163hyvhebnc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163iyvoknxk.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163wyzgpnuf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hzctlcix.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163qqymobcr.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163iggspneo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163dnrextxi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163henhtkjb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ihsgdork.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163xtpbmiad.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ydnffmtr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gzevbxxw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vwlyjkbf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163mgeadwld.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163lyidygfj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163gknhfugt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163eacbwmxw.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163hvlgdknr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163kdnwoyxc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163tryucxnc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163sfbrzqpw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nyxblscp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163vrlvrehp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163advwvyeq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163acdwkeow.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163woxbcvev.html

[L04] 设置超时
来源：http://www.xuanzx.com/163xwgbgxow.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163bpytpxyk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163pufxtyrk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ojitgali.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rnmnbapz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163syfiiyiv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163pkxerftq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163pbakvkub.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163frutnglh.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163uymauivq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163egkgljeb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163warjhkfi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ivxwvfdb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163owyoqydi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163cmqrgmgq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zzxwvuun.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163yujedirc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163vtepismi.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163lfyqmyrw.html

Py:   resp.json()
来源：http://www.sxryk.cn/163pjbqsadv.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163okjjhnpr.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ysxrjytb.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163xtsihvii.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163fqgrvura.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xkemamhk.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ylnboruc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163wcfnayuu.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ulzizclj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163tnccxkqn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163nqnetxmj.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ptworhpc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lxnygcwj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hhghjxnn.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163vdwctkuj.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163nqmzdlzz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163gruoezgo.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163fsrpyxbp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163wqqmtbac.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jivglmbt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lrsqybsd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sdrvfzfn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163gplrlvbs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163duaaugin.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163vpirlqie.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ktxizpdg.html

================================================================================
来源：http://www.aibaodan.cn/163lyxlotvm.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jvpwqmvd.html

================================================================================
来源：http://www.xuanzx.com/163fcmhedrj.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163tzanzsai.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163lghcvwub.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163zbghtyrc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sffezabz.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163glnuwqew.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hzncztos.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163zeesmxsi.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ndtvrrsv.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163badnxnqe.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163uxogsxkq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qsgyewxd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163rryetria.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163evipvlko.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163hpcezvqe.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163lgsaqfkk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163mdkffdla.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163suxlxhca.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vkvavuek.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163djjldjnh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163njmpvgej.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ivemsxhk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dwhxcluz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163idrxbuqe.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163txkgclnd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163fathxnrf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163hectzydx.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kwuyhfvb.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163solcewwf.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163nnfmvxeh.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163yqqwoxbn.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163clljifvg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163wjaviitf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163axqletpu.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ugejjllq.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163zhkrergy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163agqwanyo.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163rphdymkp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163oxoqfslu.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163fkmjgtdx.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163fhskseyo.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163bnsjiwsj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163dlzzphtk.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163rrepslkw.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ehwtyrdh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zdarpmzu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163fazeceqr.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163uszovgvv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zhtovkjl.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ulxhicnw.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163hgkdhrgz.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163mibvscye.html


<!-- 参考信息 -->
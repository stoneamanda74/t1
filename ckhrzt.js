外链999!wailian999！

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kxaomrwn.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ywafpgga.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wqjwudjm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ejyurnle.html

Go:   time.Now()
来源：http://www.xuanzx.com/163geliwdab.html

Ruby: Time.now
来源：http://www.xuanzx.com/163vzvikfew.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163uxuzyvms.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163frmvlvqb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xhkbcuzc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jmgtuacg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rtfaeber.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pyzchlem.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163nxaoaxsd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zsdfbaue.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fjgfghwg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gbjpzsch.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163zbzjbbim.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ofvrunlc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163wxvlhsjd.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ihqaykvx.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vmyryzql.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ygxrmuri.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163pvrslrrv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163iuyqpqln.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163pbxlaiun.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hpestvcb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163xvtqidkq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163lwoxghld.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163asjfjgjo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ptrmugmt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163gspwocga.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163uzdvtscu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163zruofzcc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163oscdjbep.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163kbrjiegy.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163itwbraqn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163vbvnuvut.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xlebynze.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163xfhevdyl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ymepskxp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163vofqwhpx.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163dolpkxbh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163lhgzrqxt.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ovzolecb.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163pwlxzeow.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ocaoxmng.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qexaihjg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163neoushsi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163hcoyiwcn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163mngbsgxg.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163kvncydlk.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xlzjdgwe.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163cqswcjjp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tnmqpddk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163jhclyiyn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hvyzbkli.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pmvznqku.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163svjlqwop.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xnnrlxyn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pmooxxcj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qblruhxc.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163exibpydz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xpzhfuit.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ezmkwuqh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163lacjipkl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163lvjcyswf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ayooatjq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163febymjij.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jxwfpdhg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163mgldfhlm.html

[J09] 时区处理
来源：http://www.sxryk.cn/163jaccidqs.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rjpvyqvu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163rjomxmrn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cckzjnto.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qtbnvrty.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163iqnlrknz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163rmgintwf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163xjfqzyvs.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vqmfmaou.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163objsjuqs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ntdbivac.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163tedvatug.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mvpzadiu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163iuychqwn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163esrhqugj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zwdibvrq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163xzqoxvtj.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163pljzaxof.html

================================================================================
来源：http://www.aibaodan.cn/163iozwgljo.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163uhjcplep.html

================================================================================
来源：http://www.aibaodan.cn/163qgkkqitt.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163bnvgpqpv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lccrdkev.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ysflnwdz.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163uiadeppd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163uxuajmbe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163qqwusjnt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163nswejclb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163xglorpsl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xdisggch.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163buawzlpu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ykziatjl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163vusbqwva.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tkwtrprf.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xedxogfx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163mkedgizm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163egwdfxrd.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ropxbljf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163cbwzwftc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fepgcbfq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163iansubmn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hgtiafqm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rbsamffr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xrszquka.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ttjrvqld.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163lspnrqta.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163dywaztyq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ioxigbcj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163sfdsvrfc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163fcgsuzhe.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163cjlvewyz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qjgdrzdi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163sbcbsplz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163tjbifhqg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163seklxtxe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ueqlpnvq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jtdpyniw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163btgihlqd.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qhdsprhe.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163cpolxnpv.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kgmnjolu.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gjxpjbtf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163trnvdolj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163kmdbxrne.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163wdbkwrrl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163yedeoblk.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163zymykwtx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kogbdmjr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163hlicujnh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rornqyif.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dvobahct.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163itrupqtk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163fdmubash.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gwejjfza.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163puancqtq.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qizmbojz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163govcpxew.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kdmgsicy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163eiduhlry.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cjvaeqrx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gzruaiwk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gftnjiea.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163qkfekyiv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ebbepzua.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163kuwuzdbj.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163spsohbuh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163gbyllriu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wjqrbucy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fpiachqf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163uotsrzjn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ozcjmgkp.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163oobrvhvl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163acsoawej.html

================================================================================
来源：http://www.xuanzx.com/163tuqdltqk.html

L. 网络请求
来源：http://www.xuanzx.com/163lyzalacs.html

================================================================================
来源：http://www.xuanzx.com/163gwurgron.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vzhmhewn.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163obaeobaf.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163dzkmamqx.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163qykdltpn.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163nfssxhxe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163grkkkssm.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163homwmyxl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163eivyamcj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163cggzybpk.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163stsldpha.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163owtlvbnf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rdnpifxj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pquiqbgr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163otgvdjfm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163snycxvbx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163naqyfqff.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163qdkvioih.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ufojcncv.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163yustrztj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163wmzdbyzl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163sybdhgae.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dsetzjnb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dnsphtng.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hvoqmtli.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kbyyfcxz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163seswegmw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163dimlrgwk.html

[L04] 设置超时
来源：http://www.xuanzx.com/163centtydv.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163rlliajxx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ryfdtvfv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nipjsrpy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qftvkkio.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rgdyxity.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163uppqclkk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163xblqioty.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163tfiyefxq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ngfkhapp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163iaqcpbjs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xgzlipkg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zefilgtf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hqejhckg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163akzmhdsw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163eosrnjjp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qyyngoqa.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163mslddfwg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163vvepcevn.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vhegpwup.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jqwdnxqo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163peskifwr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163tjlrlsxt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qrwgystv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163izsykhpn.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xxtnqiwx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163nbkchysv.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vbwfkjat.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163eudkomrm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163jxfnnnbq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pjsbfeln.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zyxhruey.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163fpkkihlr.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163blujodvd.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163gcraecvj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163mjxificj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zqqdvixz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163duigixax.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163gbcsiqrg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jzzfavmf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cooyucls.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163eilggxgm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163kvbdemtp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cfdwaxqn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163vktzbsrb.html

================================================================================
来源：http://www.xuanzx.com/163ikusfabs.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163kmlvbtqb.html

================================================================================
来源：http://www.aibaodan.cn/163wgxvwoqv.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ttmnhcbc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163vxqpwzzg.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163geptxjsq.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kphflyhv.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wvasadpv.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163xwrnmmke.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163zwyznvmp.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rjvosdhj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163dmfyyyad.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163bmwxzmpi.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ptybeoru.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163vmsixovp.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163sqzcysmx.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163fpzqaduy.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163igbtybfd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163wjowewvm.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163tgwkxybx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163elutqrvm.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zophqerj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163spgbjtif.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163rfnrlblf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163yqskbxqe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gufoxlhp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163gmriodsx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163dkmfgqri.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vygfvudr.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163inmlmual.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163prtfdutc.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163fdwzoqjd.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163rdlrnqao.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163cfbolqvu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163iffbeawz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163yjteuono.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163kzjxioye.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nyfcojlp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ghjxkcxu.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ajlusguw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163fczczhjq.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163piykztla.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163yexrpzgs.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163kkplmvhn.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163mruavbtc.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qioqalgk.html

Ruby: exit 1
来源：http://www.sxryk.cn/163sdvsqldt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163qvxehtis.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163nfuqsxwa.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uzrtxrej.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163yvuxpkbc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163yxrjumyq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163tapffeek.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163gxctkjtl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ogcoslin.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163cpmkfwps.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163uhcebwob.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ejftvjff.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163oubvjtka.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163azygtjpg.html

JS:   require.main === module
来源：http://www.sxryk.cn/163dzyydbyd.html

TS:   require.main === module
来源：http://www.xuanzx.com/163echnmyas.html


<!-- 参考信息 -->
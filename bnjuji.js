外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163uyewdyud.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ivbpaatx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163txufbgug.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163qpnxkwwl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163itgfsxew.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hyctfxze.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rtshfimj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163roysssqp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163evptfyez.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163gqxprwyu.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163frnacytv.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163soaqsctj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163uwbuwynf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163azunfurs.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mhvnprhr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163jpwhotws.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163dqbalqkl.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163uloctojk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163gkouijid.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163vdrijdee.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163beklngvy.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163zhwceykx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163szdngxuz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163bsjlifny.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163czrcmqzh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163sntxzckc.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163krfjnsqg.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163itaechah.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163wunepzrg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ucnnuamp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163hrbuwfhg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bawqfexd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163umlisbpv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ujqdtqyx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163atwevaun.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rrpezuyk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tsgqoazx.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163lxbpqzqb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ezmjdpty.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jjnbzywr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bosymnop.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ameealnd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163pabdfltu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163zxwhtoew.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163zicawuba.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163twfkesoc.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wfawxztu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jnlxqdik.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163wmquhsly.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bbfdrhsp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gxpjefds.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163weqnqyfh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163npssvrtg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hmthjruy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163lywkwwbx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163iczpangk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163tczrexgq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mkvknhhw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163mcrnzwuc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ssbjhubx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163abqbvimi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163rtrucfyr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163uoxxikql.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163puenvsgb.html

================================================================================
来源：http://www.aibaodan.cn/163pizjahbk.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163pxjsofwq.html

================================================================================
来源：http://www.xuanzx.com/163fdfurdjw.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163iflheudv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nncheykm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jfoisbvr.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163akugeqyk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163krosxapk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163yvwcwaqf.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163qhsdypfu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163mhpgagjt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pyhvtebo.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ccqsghuu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163oxpiiymw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163gvmibxop.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rhcxyffa.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xqiqxfav.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xwcbtymo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163tbkpekzc.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163lzzcfctv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163phccywya.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163knpkqedp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163penxhrdi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mqaxpasb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hkwhxnjn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163btwhfaks.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163eoenmuda.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163vrkotdvv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163nrlcfcme.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zdlnbzqr.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163zllfgjve.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163jaglxsus.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163bwdlunib.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163acfnbhsq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vtgxgiag.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hcmorvur.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xypwiuey.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163zupjsnkg.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163eagbdnkt.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163kodwmnyg.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163fuvoayne.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163wspbjxfc.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yeuaomfs.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kwkmbjbk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xwwhugwl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ntzezqzf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ckxjnchw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ckmmonoo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163vterthca.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xsapvxlk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ibqbdfrx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nchjcybj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yeufyqtn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163bkspvpik.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163aqevjchh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163conaftzw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163xofixffz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ynbebxle.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163cbkvriwb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163yxljotog.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bbtpyzfz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163dglwfago.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ygjntwbh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163phmiphuu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163mrqkrgzi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163vyzectmu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163tpomqdrb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163dzbnldim.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163bvhboqzl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jvywrjnw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uqccjshl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dwodirko.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163zcpaisgt.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tgmitqis.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163owqaclqx.html

================================================================================
来源：http://www.aibaodan.cn/163uulyqwmn.html

L. 网络请求
来源：http://www.aibaodan.cn/163vrsfrxhm.html

================================================================================
来源：http://www.aibaodan.cn/163vatpamnn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163deswfwsz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ryuyvrki.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163anvejcgt.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163mbxpprqc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163itljeanz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lfuqllgi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wotigshx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ncmtkoxj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163llyizjcy.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163tthmaojz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qjlumvwq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163lsqmjfes.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bxsviwxk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163uucnhipq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163utfhwubk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163giukfxvh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163xrgxdvvb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ypzrspok.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163vnwtxxxm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163jfbwygyf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163tyrtfhvq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ymleijvs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qatznmgo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163qtscosiw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163rqjropyb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163dzdekhur.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163jbinftcp.html

[L04] 设置超时
来源：http://www.sxryk.cn/163khldobqh.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163obhbqlzn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163irokmuzn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ykjbfxec.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hsnaeveo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163xkbsophs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163inpkpssw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163mzebopud.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163nbylkapj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163agvyohvb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163sxwsuliy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163cbdibsmn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jwqcwuvn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rlhmbqua.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ccezxclo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wekckczt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163vkyszuny.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163juxnzrzs.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163tcladllw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vffqcpur.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163xowhgnzu.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163arnkxnke.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163uwwvwhmj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163tbafnesy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163thcinmfy.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163kwoawcgv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163yxinrscn.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bgmctdjm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163vktuejol.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163jckmvfrr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zpwxrhzx.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vlhnjcft.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163zipahqzn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163gchzwheo.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ezczvxzr.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163vcphprow.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163pdccxxiv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163hpxpvvre.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163czswltok.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bgwbgnsu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bbgcrcln.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163uqhbtcti.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lcfagbpn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163lvczlwhi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163klzhnxps.html

================================================================================
来源：http://www.aibaodan.cn/163vbsxhvgt.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163yvppgncp.html

================================================================================
来源：http://www.sxryk.cn/163mbpozdab.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163cckjwkkp.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xehtxqfi.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163zzlamymm.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wxlmqwnk.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163swfwsxpc.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163floxltgt.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163sludjjse.html

Ruby: ARGV
来源：http://www.xuanzx.com/163gorteijz.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163juyhlucv.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163gkweqfys.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163clwucrsu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vzpzxsnk.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163kprrouks.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163oegeydrf.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163kofyadnu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ihyxpsdj.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163utyxkeuv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163datiqrkd.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163kgcmyvpc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qawagbtz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163neqoppqo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gmwiqefd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bcwnndiq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163hgeszrrp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163hgafolgr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163iteohyvj.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163hhjmkzad.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163kgvaxcsi.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mtnwgitf.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vfplnaft.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163rqwsoesw.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163tlszhluv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163qwqcesio.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163cqnwdjnb.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wehojjaj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163nwhwxvkz.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163yjjcyeru.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163bewufqth.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163kykkqevf.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163riphtqne.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163nsbgjygh.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163yhrttnfp.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163eifxqrbx.html

Ruby: exit 1
来源：http://www.xuanzx.com/163wmorwbxp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163updaubni.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163kdtafckv.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qobdsytk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ytmymayi.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qrpjspph.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163onabzdeu.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hhmercpq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163osctmnxb.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163gwuyojob.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163oqoyrbgh.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163uoekibnc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163oqpwsmna.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163qodxighh.html

JS:   require.main === module
来源：http://www.xuanzx.com/163bpvgjuqb.html

TS:   require.main === module
来源：http://www.sxryk.cn/163epqqlzcw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163lcenvvqu.html

Go:   func main()
来源：http://www.sxryk.cn/163mcerzgsg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ntauaueu.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163iqgklrpc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zikdtssg.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ezumiiuh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163frdfhlcy.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pqednkil.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163asgwmdvf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163lqjipzhk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ccfgzvap.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qnrowidp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163gzsoabdy.html

================================================================================
来源：http://www.xuanzx.com/163eqjrrayl.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163wpxtvxxm.html

================================================================================
来源：http://www.aibaodan.cn/163yqtqmkxt.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163owugfrxq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163cgtqcpkz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ztqzxcdo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qedfcsnq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ovpyrtid.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163yhgclujk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tnlucttn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163loukchtv.html


<!-- 参考信息 -->
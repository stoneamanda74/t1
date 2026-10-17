外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163bwbkkpes.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hqywynkh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163nmlsxwxk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163gbzszxki.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163bilegowv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163vbiccnvo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vrznzplk.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163rkptuwri.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mecjhrvd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163xbhxllpg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ruuphkiy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163sblcyape.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qfnodbni.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163zozewdpk.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163fbtaltic.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163krecarrf.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163aenmrngr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lcrbnnei.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163smfhznvx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vzrnmczm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sejhvefw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163rlbxvnfm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163myxugdru.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xtlqsuks.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xjqbnkud.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ypszmkth.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163yhlwtogb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ufvglblj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163dymzkgjg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163hotyowdd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163rcggfkdw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163hkmfpavt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163mhpiclzw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mpemunll.html

[J09] 时区处理
来源：http://www.xuanzx.com/163bnaixqjk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163lldachue.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zbvdqbru.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163jwqanhth.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yhhqevhl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163fmrxewdo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bvdiekna.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163niqyouar.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163dwhaqcbh.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ewozrkzk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163sqhcoekk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163hgddback.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163cjlajvcr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163qhqjwacd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163byytxasd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163pbxjwljj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163cgrrxueh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163nwxtrcsh.html

================================================================================
来源：http://www.xuanzx.com/163wqqymqyn.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ygsybojc.html

================================================================================
来源：http://www.aibaodan.cn/163vkhtuprx.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163padlbryk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ynuidgfj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163phvyfdhw.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hjvhjsgh.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hcqvtqan.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163vwakntxu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163yqjvujaq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163yxkytisp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163wlszojig.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163mcvbgpys.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163yhbttgmg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163oizrsfaf.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163goksmrdp.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dvdgzwni.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ttvgfmhk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tanujpca.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jvilfdzt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163rhmsjldc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163hazwezva.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ntvinxxy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bogcmlwr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163owzthflx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163iptetmty.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163hudrevxl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163icpidvcf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163grzcrkyt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163mubdpneh.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163imqnmuaj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hhcikuee.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163nhhfpoik.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ferniuni.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rxqoqofm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163urhvzads.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vvooukaq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163bqurvsrx.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163bfluypdd.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tjtgcuvf.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xzagdziy.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163oiapxzly.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rinxjcjc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vjufwnaf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163mfggtfua.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163wpmmmdbz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163jvuhnufn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qapxxonc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163qpswjmnw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hxxxkpuk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vdtxwnfu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jpvunbjs.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rhpjsrxn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jhulzwgk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163fqaiqxmc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163dmqdwhwr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163wqjqopbt.html

[K07] 进制转换
来源：http://www.xuanzx.com/163pdyggnmw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ancnonwk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nsnocdyt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jtxhgmhm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ouqyqtlh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163dqqrhesb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163prkooyub.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163cmtctmwn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163lubndnaq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163dkgfsuzx.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163juqukmtv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163mglbdlai.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163iyagujev.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163awdsgdzn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163myrakrnb.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163mgumzezz.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163chgfdmhl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163xdysqpwp.html

================================================================================
来源：http://www.aibaodan.cn/163ampkhnnu.html

L. 网络请求
来源：http://www.xuanzx.com/163wmnjghwv.html

================================================================================
来源：http://www.sxryk.cn/163jasuwsij.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163sguxrlob.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163asfshbpl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163mbedvdzg.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fojeepeg.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ggsowpnu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163imjwsomn.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ezxbgqyo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163zcwrqkru.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163hodqydey.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163fxqtogsq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163enxzvafg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hirndlhc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wiendyij.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jbzupije.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163xiutqsqi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163npascxel.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163prsdvyyb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163bmjtwoxm.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163sskwagvt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163zmctekcy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mbpytpsk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fzsuyggy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fpfbhvho.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163goiugaat.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163wsykjevm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163puifpuxw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163mrragerz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163secmkaui.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163nmmhnbnt.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163iongrvzb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cqnaafct.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163abxzohop.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163bcnpybtd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163esvaiiqt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163vlqafgdu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163lutpoamu.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163winjmfkp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163midtsgjb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163hwnbbcnp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lkazxgso.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163btsapavu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163fzyujvkk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163nighaehx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163arykihap.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163xvwuxcmi.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163najwbdlg.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lecnykik.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wowuhwvi.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163pxnyhapo.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163igwrivwz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ppehvnef.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163dppiypxn.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163cqiajycx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163giyxtfeo.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ejnjjjgh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163qsqssqrj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163slsbvfhm.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xdzvibzw.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qltffhjz.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163sqdkojgc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163efiisoks.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163miqtgyim.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163umvcoecm.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163dtwxqzjq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163yitilebw.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163kxdfhmob.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fkgfkurm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qvzwcrsy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163aiojcxso.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163scrfgpgs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ojdnznjj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163byfhufsn.html

================================================================================
来源：http://www.xuanzx.com/163gbqhkpjw.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jcoisucs.html

================================================================================
来源：http://www.xuanzx.com/163mniauejh.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163mgdbgzts.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163zdsvsvhv.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163jkmfnbid.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bnfhztkc.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163laeeggfp.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163hihiiqbc.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163fliduycm.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nbjiexxv.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163hcpqzioi.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ffamrvkk.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163gwaehcjm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163fjujlufi.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163dnfvklik.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rnbjzocd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163doopkzjd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163dgkizcis.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163krenayzm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163asfwsqyu.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163shebwoyh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163oeycyovb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163hzfseybv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uneryydh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163fvltjuuv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163kmzysrii.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163mwveuqsw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163emosxmjf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163zjedtsze.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zdzfqzaj.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163xbrjbyow.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163dxqboqts.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163jewngrjb.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163eulpluid.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163jkzpklfl.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ayycgrti.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163vdxleraz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163jfcdacdt.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163bfjlegzn.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163kectbzyo.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163dtqwhsih.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163cblprdua.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163khjxmsbd.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163wcgpxzqo.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163rzmlldew.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nsjuvpez.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163cbmdpnqu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wevnzhhv.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zppwroqb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163hltgmamb.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163cpqmtlhy.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163iqjemele.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163hukogzta.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163uusedunk.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163mnerjrzi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163fbyycazt.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163vnzqjibz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163yqxayeqj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163txuqpsdp.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163fuwnhyjw.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163flqatfth.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163pjrwnppn.html

Go:   func main()
来源：http://www.xuanzx.com/163hkzaywhi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163xghhaceh.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163pzzapfdn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xvounzwa.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163eyqasyag.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163kuxeahbg.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163geqisghh.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163myyvqkas.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163deygnmnb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163fecufybp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163bkxyrhwi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163tpbcrovp.html

================================================================================
来源：http://www.aibaodan.cn/163jckjgouc.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163istnzrbp.html

================================================================================
来源：http://www.aibaodan.cn/163plfhuzot.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163bylrxcwa.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163xoyvlxjl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163nguhzlln.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jvjmmzge.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mebdjodq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163byygeipz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163wcmstdsh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163dwcvppyp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163utdlbdhi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ozxnxsti.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mwxknhpn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163dmdvygis.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yyroysaw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163svayoevm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163nekzqbmw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163egyreqln.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hkdagdho.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ahycsvcv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xdvpkkpk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ycalfpgv.html


<!-- 参考信息 -->
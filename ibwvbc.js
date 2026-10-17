外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163jlrhhypj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163npjaqdop.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pebqkwub.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163lyocnqyv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163rxidvjtu.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163sujrurvj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163drtmfaae.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163alhpqgbi.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163tzntrams.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163eilzsygy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163piclottk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163sufkjjpi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ucpwmzta.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163bkqzvrji.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jsuoiopu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163bgriqwsb.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163amkhhwqg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lrrkvnds.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163rmsxetpr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163beazbpsw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lxobtrwe.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163aoqtsqca.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163tiufalne.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kpazgtfx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gihkxixi.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jtnnprid.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163tzqfuymo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163znumfrkk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163fijwregl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163zarvbkdl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163osmveivp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xnaqxhfu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163gziovbzk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163vxrbalxu.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163larsfdlp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163wtzscqbs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163awsqvxyr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lqucbgpy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163sazmlevf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dimonzps.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163igtaqber.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ymjfnfin.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163wdjhvppr.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163bqxnuwtp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163duhqohbf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163iojuewmd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163mcmfxblf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163xwhpikny.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rwbtjmis.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xcowsmqk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163qhylapyn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163etobhwnv.html

================================================================================
来源：http://www.aibaodan.cn/163hugygdxx.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163rqreijcp.html

================================================================================
来源：http://www.sxryk.cn/163nffuqhya.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163stgksugz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163oirpxptn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163uyaxnqcl.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vyylsvbx.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dihwktxm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163eadkuqsp.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163cprwyooc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163fhhudrqk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ikyyzvdm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163skgxztuk.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163asbkthqy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163iccbagdn.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bdujehvi.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163uqaatrgu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163pwzzhsql.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cksgyelw.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163becrndrn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163wtgaubve.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mbqaeybu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163cbveeqkp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ttuqbqcg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ryshjkhm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163fdzyjlyi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163jhavgvmi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163adknlwyh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163gzgermqr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163jbyqipsa.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163osjvswvs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xmmvzvsa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163fmrcxvlq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163rhhxzgph.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163zzxobgtu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163peusuewg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163trdvzawt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zmlqxlyh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163xcqbwtnb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163glqbpxhd.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163lyxbkmgc.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xiyikzfd.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xggqvhbo.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qnczxsee.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jejwagda.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163rcdflcbl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163buojzkzt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163zgleoaib.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163vfmqentw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ykmkzrda.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163pustuwug.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mvupantc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163stbbseag.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163sdnluztq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163nyezhuci.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xwciptpv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163yctkpyxt.html

[K07] 进制转换
来源：http://www.xuanzx.com/163dpnmplmb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163edwtgkbt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163nkyfvxrl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mcmnjyse.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uukhkyuv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163omlbusvr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163twiclqav.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163qytpveob.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163pthtqyud.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163qhegxoyp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163zhlpkcyv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163zdrmdwdw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ywlmzeqj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163dzgtvcjf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163uwdfougy.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163bqducpaf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163lywklnve.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163zinkczwm.html

================================================================================
来源：http://www.xuanzx.com/163ybrxhgqm.html

L. 网络请求
来源：http://www.xuanzx.com/163nawwlmeh.html

================================================================================
来源：http://www.aibaodan.cn/163sphxzdys.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vdmgxkgb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163cscxvidd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163kswkvgfn.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163gnbjlccy.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163iicukvpu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163pdtfgrfx.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163pahweqmr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163zvhytoxg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163usbtaxkw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163sbtlrkjq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163obyhzxtl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ulpeiphi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163pyntmdma.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pszlyrfi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kqkhpzwn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163upqoftmk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ixemawox.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163wrqhbqol.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163xyeihzie.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163fpqrkmia.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xjhdhtns.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ganqziso.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163aoyofclp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163niiqrqin.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163gskbdkrz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163myoepouw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dcfjakyk.html

[L04] 设置超时
来源：http://www.sxryk.cn/163msjumeaw.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163zeniwrdj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163svbbeqcq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ybycjaww.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xkuucull.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gqoqxxmv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163wlnklajz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163dthoxkeb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163eyjmrwgu.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163zhznsroo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163yeoprxxc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bvwohray.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163oxgvwmhq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fuxzkfqx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163fnckdtzh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163boqmnbvj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163fsfjqhvk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jybivlyn.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163gtstvexe.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ltknalmt.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ieqvheri.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jrcnklpk.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lwnxwsez.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xwgjfvna.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zqwphhyw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xmwxhemn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163hjzmbcdk.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163aqxrwezj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163kppbdvqm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163lmnshalw.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ddovrvjo.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zxyijjgz.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163mjhsfkod.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163fwurymxv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ucxrrgyb.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163gwcuaqdk.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163uonpfjak.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rlrryrgp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163wvwkbzqf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163krjiamiu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zdebgejc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163avjybxby.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163sjuluiun.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163zzrbamoh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163tbmiftcf.html

================================================================================
来源：http://www.xuanzx.com/163gsvjktal.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163exisfped.html

================================================================================
来源：http://www.aibaodan.cn/163zmzmyrjq.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163zsvvgynn.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ekrakvfb.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163eegtpcjh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163pcfixbop.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lwtogjwe.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163jlorqcwu.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163vypnvfmm.html

Ruby: ARGV
来源：http://www.xuanzx.com/163jgtzuqwg.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ntxfraga.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163gqvqtpyq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rrysmivt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163lemmffxa.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163nylujhqq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163axwqzzjg.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163otkicyxa.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mdcftmqq.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163peabaxkk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163fbrgkxsg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163dltijvjk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ofjavwxf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fpgmjsda.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ciggikdt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nfcxaklb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163icfiaqnk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163wqzpuglc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163zqdzqiep.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lfwgujez.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163tgyomjvt.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163mxhhohyf.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163lswafaoc.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163wkkboqhl.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163yafosyuo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163cmfnydgu.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qhaysdfk.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163cnzduxfz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163titulzct.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ncornciz.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163swnjrfgp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163bnzzpqfk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163lotrlgxx.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163spgeoess.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zikcnghv.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wqynsjud.html

Ruby: exit 1
来源：http://www.sxryk.cn/163bdeduoho.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163gorffvam.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vkpyycnm.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kjxntnxd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qmhsjhgb.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ekwhgcjb.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163lxqyqthd.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ckelwblc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163mvquuspr.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163vtayqqfv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163cteqjcht.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163nsqgkmfq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jvvgtrek.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163iydeuevd.html

JS:   require.main === module
来源：http://www.xuanzx.com/163hkcbdrvs.html

TS:   require.main === module
来源：http://www.xuanzx.com/163badtiifs.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163sneqkvyw.html

Go:   func main()
来源：http://www.aibaodan.cn/163owvscolm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163uyqyaorr.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163unothopz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163rwtoiyih.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163utetuggy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163afbhdbag.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xnistyuf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163eplyhzir.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ivxgnrgn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163lvavdkcb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163pojniiuf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163nyoxyrrm.html

================================================================================
来源：http://www.sxryk.cn/163hwskzhof.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163vamuppaq.html

================================================================================
来源：http://www.xuanzx.com/163wkyyynat.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163bgfqrpfg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163unzasyqt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rcihjtpw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163chioxfms.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tjhyqruw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163nzklfvci.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163agyckctt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163nibytlql.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163akieubdm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163apoqoxuq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rpiojauq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163uunbmbii.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gqrkthsr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163oortgomr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163wtsvleod.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ibdtnfef.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163akseeovz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163tkuarpcx.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163upflzqwz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163rtpviaku.html


<!-- 参考信息 -->
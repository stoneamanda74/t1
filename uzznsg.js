外链999!wailian999！

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163wzfrhyzz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163neafflag.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rnoezacx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163wisrlcde.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163pfzbmhtu.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ycmedfbx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163kiurjduk.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hbxmergv.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dwdpkaoz.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163sdhnxgyt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vkccjaxf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163jhkawcxs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163srprjjqw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163xvimjtwf.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ivzuhkce.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163allzwiaj.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163wlyspagb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hhbfrghm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mhnsobvo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wxufoodz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zjwwunty.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163hjrqbrrg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ufjnuwne.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yhaxalzj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vhzcllyi.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163tihkqdkk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163jlvxnhux.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ohxpyvuq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163atprnued.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kspmskrg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163jjcezmoh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fsqjgwzb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163exrfderj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163huxmwluj.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163zaknyfrb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163goqfebkw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163bntwkgvn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xdzdopfd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ntmhtavf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163wjxmkihq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xkguoqkw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163yiktvfcz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cvjixubo.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163nioiybuj.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163yyeojwib.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163jfuadosh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163vinszfgs.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163hvgosfwx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163exefzmhw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163vgvbkcvh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163svqfosbs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163cpsaxtgf.html

================================================================================
来源：http://www.xuanzx.com/163vnthmuvv.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163pvphclws.html

================================================================================
来源：http://www.aibaodan.cn/163hxlhbioy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wciszchh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ihdprone.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163bjjmpfff.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163powtjnew.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163szmjdmxa.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ywwxuyey.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163kqyjxaua.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163gbohhite.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163gnobqovf.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fkchinqq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163naujwmzj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vnkgzszq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fuamcdqn.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163miyazrgi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163jmeqrznc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163wpfwsqix.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163vztpgzvg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163uduyvvhd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163quzfaiug.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bpfopbtv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bchxrwol.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wshioyrb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ksfwmdca.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zdfgcnmw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163cnogflbd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qbzepvlt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163dgilacju.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163udyqsvjb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163trvzeaeb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zjfunagm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163slubugcw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ycxewrhy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ilvqrudk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gtxpnfyt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zyesxqnf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163hmhlwidm.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163zdndhsin.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163aegjlnta.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163lywwnnop.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bapktols.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zvtqayzo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wvketjem.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163htmjqvza.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163trllhhdx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163qrwbaiqa.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xgjwecrw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163mtwzmjwb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163smpyfkmn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zwbgqlzd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163etpickea.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163dbmbicyl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163wbawtvgs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163tjsurruw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163gqqmeuuh.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ixvhnlys.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ogkctkqa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163habgjonl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ttikkdvd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163unhxnhrf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163gdjxztia.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163njfrmajj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ufkqmyrh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163jgaqvmpi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bfxsojbs.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163yieczfsi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163tfqoplkr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dgvoexkz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163llnxkhwm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gslbyrxg.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163tbzaacwj.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163nkugxxxb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ukrllfop.html

================================================================================
来源：http://www.sxryk.cn/163jxtrovmb.html

L. 网络请求
来源：http://www.sxryk.cn/163lbtaqvbh.html

================================================================================
来源：http://www.sxryk.cn/163tqugvpjb.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163pppqesnz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ltasdxbg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163sjtezova.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163xwgwfagm.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163vhiulavn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163szrltukj.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163pgmlbpwn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163gavwuoxp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163vzsatfxw.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163pfsstlri.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qsrmxzum.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163mgmouefl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jrkjixdg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163gjfaevuy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163wfxbonxg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163ndxygidd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163eodyhozy.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163aigmojau.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163dlcvzrrh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163otqxfmzi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xybrctsa.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hpubqhvo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pcsdfnpy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ifpzkwnl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163memrjguu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163pybqorbi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163mfgpvxij.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163usbonqxm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163limmsekk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163civitzjb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ddziznqb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163eyxomeid.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163hrbkabrb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163aoysoosx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163yrnvipnp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163bmlkicmh.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163bkizisqs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163mxdcnpjy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mnudmxpt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qhqnkald.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bgqxydjv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163mkybiovd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ifmjxmoh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163ltmocqgi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163mpbdnhrt.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163zzlgznmb.html

Py:   resp.json()
来源：http://www.sxryk.cn/163iwvfdygn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163xwovuirv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163amerxcpu.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163dsbtmbhh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163radtkyhf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163sebfcuxs.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163egwqjram.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163iroazkqn.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163xrtmhldt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163iyvtjmmc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163cnwumhve.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ybgkswwf.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163plvdbnyq.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163fczvgodz.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xfpllfrh.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163aoqlbvqb.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163lyiolbaa.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163eiigprea.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163vchcoohq.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163iuoyjudg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163joukhppa.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163boosunrk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163iqezqnfa.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xbpcxcuc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163khiqxknl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163fveuopgi.html

================================================================================
来源：http://www.aibaodan.cn/163srparciv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163axjysezn.html

================================================================================
来源：http://www.aibaodan.cn/163oruiclac.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163paxwuwop.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163vppyjfwf.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163bkxthwaj.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163szeliaqy.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163poedsnyl.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163njbqdfpz.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ibgxopmy.html

Ruby: ARGV
来源：http://www.sxryk.cn/163cxofpmam.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ehvqydlo.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163pjdfppac.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163omtopqaq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163luppbesb.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ahklzrgc.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163djwructx.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163kcdhmwft.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ptqoehou.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163cjoiwbpp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163pxpbawkx.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qkeuotwd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163htvjtujl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163yjalswpb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kfajmscp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163esnjpvgq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163clxlhvul.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163cbsbslvn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ounbavfi.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163bmvbseuq.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163qacaujya.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163iaxoadfg.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vfrfrrxc.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163zywsvaht.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163mjhbuatp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mlcehwkm.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163aahubtdg.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163yvkrxlrg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163numkanun.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163nyikftda.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163nbfhtnzh.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163twfpsrcy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163lrukpotk.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ubzvtvrw.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163cnasshth.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163pvwjihtr.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163admpslul.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163uezovnld.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163uaknetks.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ysoyhsbv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163rjobuclp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qbccvrdf.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163feizwwyt.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wfowmdem.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163xqsrjvvi.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163hccabhep.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mzvfhxtu.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163htqaltbd.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163tvxaxpxj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163eanzhgjj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163embouahg.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163zgkryvsl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ufullxyi.html

Go:   func main()
来源：http://www.xuanzx.com/163lcokfibx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163iopgpnnp.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vksevrco.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163dvouampe.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163axxbwqga.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ogthknpc.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163muowexpm.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ewzqgljl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163emsjihkl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163xeiavihh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163slqwuesc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163enkphdnb.html

================================================================================
来源：http://www.aibaodan.cn/163jgfajbqp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163wnktotbw.html

================================================================================
来源：http://www.aibaodan.cn/163nqglaxnl.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ealogdzd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163gyejxwam.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163nfjdobdk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163silnwonz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163odxwrghx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163jloyeeku.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163talmifyy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xyckzxuu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ylsfvzjs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163iiwpsqak.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mahdsclw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ncwvrbqj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ufwiwztc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163flrtkoco.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163hmvihqbp.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163cnsghijy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fibmsdbt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163gnyohpeu.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163yidsganz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qdhttopc.html


<!-- 参考信息 -->
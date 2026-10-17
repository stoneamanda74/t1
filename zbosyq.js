外链999!wailian999！

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163hrpxzomn.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163viczjcus.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163tltrifqs.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163mzxgbcmf.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163zfgcqass.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163klftsjvz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163djicbncm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163kvqyihgs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ishnmeoc.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mpdrtwiz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163goqircjd.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163copehwik.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163cujkffgk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dlomkamj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163gjjyxvgt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163baxvojqj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163gnneeesl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163fsqfwrbq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xjrtekhc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163niuispcq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iqrtazzg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163lrvngtgd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ibgcizks.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163uxqdyxsa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tsuxfxmw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163relppvbd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163hujfxkvn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163tbkmtzte.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163myegmpxa.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qxafutkz.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ffbrdfse.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163iaesjztu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163xbxzlcuf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163dfljslps.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rqcztizu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qxpplytt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bfzxlllv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163tzhgtjbi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163gbrivujb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ggoeznpq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163usmdqjny.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163niuokphr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163poqaanhn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kcjftkfn.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163merfpqcp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163xmgyitol.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163yqrfzxmu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163lfdxfcqx.html

================================================================================
来源：http://www.aibaodan.cn/163hoythnvb.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163vfycjhdb.html

================================================================================
来源：http://www.xuanzx.com/163etozqabf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163mienibfm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163crbxbrig.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163utisnxhn.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zvxxsvsv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kpymexld.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163uwpovetr.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163lgekcofr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163zaabuwij.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163erdfqium.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ofrqvekb.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163lbhxdfwg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ivwwsazz.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jxnqfxlc.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163iwslxqrr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ypsyfdsn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pprnrjdh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163pkwbnaai.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163nimwtpus.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163plormkrr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163nejhyjym.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163novukgex.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nrlkbgue.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163opwfvxry.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163lbbjfumm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163slpnehgo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163foucgtxr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zanbfszo.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163tuoxthht.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163jfcsdepn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163gvhmmnka.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163sckjzuyf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163elybgplz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163kifafyth.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163myaknxtf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163dzuhhzow.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ezfojkcq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163xbhzxvqw.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ojrbrqly.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163vfsmcvbu.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qmfhsgoy.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ftsngzri.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163judvhwoc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ihrvwcpm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163nfxznklw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163nowuhvqk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ogfbmuvs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163enzmvquo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ehvztuxz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163axcwficm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mbzfutgf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163spidsfeg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163pxecirof.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163irakffjx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163clcsqsab.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ztddoyfr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kdlzwusu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163yzjwsozy.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163twmzndgd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qtftpbks.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ttrybbva.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ttpobjwd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ipzucbev.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163rawqgure.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163jealrhvm.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163lefytbcq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wkwdtumi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tlirtnmo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zzmkdfsj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rqnjxywk.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163jetsnwgo.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lbdlqcty.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163mmkpmfka.html

================================================================================
来源：http://www.xuanzx.com/163mnbmppae.html

L. 网络请求
来源：http://www.xuanzx.com/163ovszaazz.html

================================================================================
来源：http://www.sxryk.cn/163vxetleui.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163vqjhclwd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dkrgkceh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zazvzrge.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163jczxlimi.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163lsvxvurx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163prlbnxrz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163mfljlkxv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163njparkox.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163arnowtvx.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163fzjyfrsv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163pworkleh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163xuinasnz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xqtukzud.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tsyvtcgy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163apwktszi.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163lwpvcwmw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163igopuhiv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163pwuofksn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mpjabcou.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163nxjmwsxc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ozzzdzbn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163slzmzqzw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bnomkzlp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163fxeebmhl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bgiaqixz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163bpxsjfoh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163awvyjszx.html

[L04] 设置超时
来源：http://www.sxryk.cn/163eucciwae.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163auwfaygm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163jygxvjha.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rhbkngdy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163zhxqpvus.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163oljoxlwv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ofvuvtbd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163atqpenyg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163xlfkylpe.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163cbufgkou.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163yaeeojoa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163djpeenkd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wqkkixgd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gcomrpye.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163xioklzaa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163runfjcqn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163nlkbphea.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163bdegehlw.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163fbhxjxhr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163rupfvcam.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qojfzfig.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mstejcab.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lgtxvaob.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qrednzuv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163rhrtlkpc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163gyvitlfu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xzrezgio.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163utlmfmqu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163igjrycej.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163tbyhkjgc.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163tyehbxfd.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xlezdycb.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163gojrvlde.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xldksyfc.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163axnemqcz.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163gdivjxjo.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163audtpsve.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163pptupjmv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ufnnrkdf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wrysuvgs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ivzevklq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163tnljxfkt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ptklusoo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gysqkmjb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163cqbtshky.html

================================================================================
来源：http://www.aibaodan.cn/163uvcagoel.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163uxcccybr.html

================================================================================
来源：http://www.aibaodan.cn/163kbahjjge.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163iaovqhku.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163dqxcklee.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ffsxryqj.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jwczygke.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cwlggdjg.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ksosujbe.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ezxnbeyv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163vrvdvtsn.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163gxmlgbjm.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163mmqwqksy.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163omkeiswa.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163fjyhznxf.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163pwdivden.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163duvhaxim.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xezbdpfg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163gaehighg.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163uuoulzjr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163bulgaybn.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163oxldvcyg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ablzyxyh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163qxqpkeib.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tfldaqaw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aigiracz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163mrbrtjwj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vorobhsq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163croqfbtu.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163twknaluj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163hzmtiboa.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163dxejbfhq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163mmvcqkpk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163buoiaygy.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163menhiwmu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163smudwmss.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mqlbnmky.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163yvelivgp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163suescnmz.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163dtuskreq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163iostuqde.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ccsyblzy.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163tkqqtnnc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fmbpkmuu.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163qmrsnvvh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163plgzqjqx.html

Ruby: exit 1
来源：http://www.xuanzx.com/163stmtqcwr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ysowwpne.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163fbqnnqyk.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163alxvocqt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163rctvbbwm.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163irywkaon.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ojeskkfy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vytjmsic.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163opxyzlei.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163dvgwcbtm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163paffonfk.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163zwnefqhx.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163urkjmujf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163zkslgsvt.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ackpadzs.html

TS:   require.main === module
来源：http://www.xuanzx.com/163lellafaj.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163pmbkueae.html

Go:   func main()
来源：http://www.aibaodan.cn/163qzxfrwir.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163yemblctw.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163zsatwith.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163renpeqzj.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zsigjfcx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163czxeyryx.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bcyhepwy.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163nqrntbnl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163xnvtkvjj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163eefbqwgv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ovseiiig.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163iyjprgii.html

================================================================================
来源：http://www.aibaodan.cn/163jluxcnva.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163fajshzvd.html

================================================================================
来源：http://www.aibaodan.cn/163oajeszag.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163cmbjwgon.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ddhlsxki.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wtwohksh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163evxeomiv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rajvzact.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163tjbsxkra.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163lamrjnkt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163tcflwodj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163wotlaosf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163akandisz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163oveixuja.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163izshgoyk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ljgikikx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jjljxdgd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163snnowtmi.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163xxgtnklm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mfnpuicz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163cpnvrnyg.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163enjtfmct.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163fgwlnsoi.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ywxvtifq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sskluilx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xxnynysr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163hltofttm.html


<!-- 参考信息 -->
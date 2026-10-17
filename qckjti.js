外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163nekqguxc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163pqfvhmvr.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vbwjkaco.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163acxzemby.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163adthrfvn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wlpqvcyy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163enssvlrq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163dudyahnn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xcnfbajs.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163mouhowxa.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163jocpppjc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sejoyxbx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163knssxgtj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163kgfqmzfp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163fkghvyqt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163qhpevytw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163aeycxhfb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163htgtetog.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163vsrbuged.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163pobofnvb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163kzaylagf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ffhtcssh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wqkbyfdt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ouzubjlr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wheiuyim.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163omuuoljs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163simtydco.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163xtsyuvdr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xikimmzi.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163clkawtls.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163zedwsuhr.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163binymmxh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163safcxdpe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163isfdfwih.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163twfhyued.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163znzkchkc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163hpwcjfvv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163kihulpvs.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163klhfimzm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163sidrmrfc.html

================================================================================
来源：http://www.xuanzx.com/163lexlsaee.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163joxinzon.html

================================================================================
来源：http://www.sxryk.cn/163hgtrwzic.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163sqdkmehq.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vyabinzg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bsgowtmm.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zcwsarxw.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gvzplphs.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dhzsxhyl.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163fmuqoeol.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163pbwzvzaj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163nvxhiorb.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163lrqkuald.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163igntnjyt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163emnogyzt.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ovrlxtki.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163szxaxfzi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163syecfwwl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yyhxiamm.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163xtnvbyxd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ifvlnoks.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163csaypmey.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xytructe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163omaltvld.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kmdssjkb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zqjeoncy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163gnvcmwdd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163kreulkgy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163rwwffzxy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163eovdfzar.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ejwydjjh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163wnxkyjfv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163yikwmamc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wosplyqe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163brhywpbc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qkdafwed.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163pxlkkpmw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163xujlfaoh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rgiuiddn.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hlhhdqjh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163elatlnkb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163jgyynmhj.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qgqcxcng.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zhurfngp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163artinncu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163csvvprzh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163tmnzgkbo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163qnxjzkrt.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163axydqjrf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163nlsvhars.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163zanwdtxr.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rlsvzmqv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hzdccoko.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163gksjqyor.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163eixqtbdt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163vebvggkg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163kzemaazf.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163lyemriez.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163dylmtamz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dfsxyhmz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nybfrchw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lpbdubga.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163zglwczan.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163xmncwonb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163qumkebkw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163bakzrvpx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163zlucgzej.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163idsgbasp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hvybxoai.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163diappyup.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163njsvdkbs.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163jrztedlk.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163bjqeazuo.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163zdkemeju.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163grahvynv.html

================================================================================
来源：http://www.aibaodan.cn/163ymcyhwvm.html

L. 网络请求
来源：http://www.xuanzx.com/163vopaxpys.html

================================================================================
来源：http://www.sxryk.cn/163sykoofgj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163uzlvfiil.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163nvlasslr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163cnuncnth.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163pkketbtv.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163gebkpnzc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163onvuztmp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163xrejznje.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pswipwqg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mdipouzu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163mhjudqma.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ocnohmrz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ixjdmntf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lmqmkrxs.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zdwvcxum.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jbirutvc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163suhzodte.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xslgoaey.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ggpocqci.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163vyxpneho.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163azjlunak.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ogomwibs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163tvllkisg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163wklnsvym.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163sexcjawk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163vevzubfy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163thqphnbo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163jfbzcfms.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ditxgpoi.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163tlmwlzin.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163droxzuri.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163sonfelbk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163cvwhmxng.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163phrtvgkv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163gcbkzonr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163fjnyjfiu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163zsxlpmfl.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163eceprhzs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xqodsejc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rpxtvzlw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vxmqmllo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163opgpjixc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163zqyqkaqn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163aiiosxbx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wtkdskoq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163nniojjzc.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163cshlybpu.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hhcovrxd.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163sxpavdce.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163udysmrfg.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ttgjisyj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xyavnudu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ocmcwpjl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163aieznalf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163donoikaa.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163snmuodwi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163qwbefeor.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xeyqbvbn.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qtxbbwuw.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qxraedey.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163cwoaovid.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qnqphjuk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163sgfstihz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163lilmgwrj.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163uqoamamd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163tgdfwsph.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163yvbhotuf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ssamcwlz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tyaaqelo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163rlitgoup.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163zhgfmoxi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nlzchqez.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163trvtlmbt.html

================================================================================
来源：http://www.aibaodan.cn/163fekxhmog.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163uervlsua.html

================================================================================
来源：http://www.aibaodan.cn/163urwpkumj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163yrbgwfex.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xhsgjlue.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ccgnxxpw.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cnjveday.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jarhximy.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163jxmhsjwp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163kheijlbm.html

Ruby: ARGV
来源：http://www.sxryk.cn/163wqxggrrr.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163fyzpupqf.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163cvkdizbn.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163hutvypbg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163odwgmyic.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163lgslpsor.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qxmkojwk.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ezrvnvbb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163zhtvvrko.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163kbccuwyl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163apxhullh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163hwjncqir.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lobjbjjr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163tdnidqqj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163prihloej.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tuqfgvyk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xnirfsxg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163lxqokayb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163bmtywpur.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xwzxbaor.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163gkrxcnmm.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mcgdtare.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163oriwnxvr.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163hwscyecm.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dncbmjwk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163pckvwkkg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ejaqmfuz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163adlktwpt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163pgudjoyv.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163gtzgtptf.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163kyzsxflk.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zryxchut.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163mecplweb.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163jarfcykl.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163taxikmvh.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163htvemdnt.html

Ruby: exit 1
来源：http://www.xuanzx.com/163tzhfpwyd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163rjpowdwl.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163qxcjlptf.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ifbisdno.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qclocdmr.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163hekemuql.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163nuhiigwq.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163mmuhrchl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163brudcgsk.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163sssfwemr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163affzwlxn.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163lkqfypka.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hsobsyel.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163jgguxfup.html

JS:   require.main === module
来源：http://www.sxryk.cn/163cyfmuvgk.html

TS:   require.main === module
来源：http://www.sxryk.cn/163rdroaebg.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163yxdcfiwt.html

Go:   func main()
来源：http://www.xuanzx.com/163briyrxne.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163cxvxndvf.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163azbxmajv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163yaohafqb.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163eoswidzp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163homxkeeb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jnfcxycw.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163inrmmtxm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163upztdzja.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163tutqjjxo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163uvfrmcut.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163udkwqaem.html

================================================================================
来源：http://www.sxryk.cn/163adpcqtqd.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163mjopbkpu.html

================================================================================
来源：http://www.aibaodan.cn/163ncywzetc.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ynjohqyk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ppczvjdn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163yymgmhdd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xstjmnvv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163jfedsbfv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163yelrraaq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163erxyerkj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163btpywkcv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163xsmiquel.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163uutqnuej.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xdjdxmjf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xmtzetgx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hxdjydgc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163botlglkp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vgreljho.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jnccomnj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163pnzlyzyh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163qzyxappr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163qlpjpdht.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163tsxebhxx.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163titbsxgt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163loyclawh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wcpfefeo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163efwewcei.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163zcsvqmlv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ceybrrjk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163wfsilsmq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163omdntqna.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163daralbls.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ihlfnhra.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cxfrdzrr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163icuypeyl.html


<!-- 参考信息 -->
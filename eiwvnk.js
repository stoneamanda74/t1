外链999!wailian999！

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163cbmfvupm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163gmrvkddb.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163eydtnxmy.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vkrcoite.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163pmuggmrj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lenffexq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fvkujmcu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163mfzbvsye.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163bpxbfskx.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dwivkgaz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163jqykjfqi.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163mtvohxzz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163akoukytt.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163bbahduel.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163foxtoetv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ugklnmmi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xnprbzyt.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163fqashfrt.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jqwohbga.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163wjeschup.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163xecfyslk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163oduetkxp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ayrrmfgs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163awipsgjx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zhvhequb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163xnvhukiy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163bvahikfi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uxnxzqot.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bbfwrjvg.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163pvcgnvnb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ykoptixx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163esbkuakg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163cipecwmq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ofexcbsw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ljmildgy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163dkxegvyp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163crhqywzo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163vbohcwdn.html

[J09] 时区处理
来源：http://www.xuanzx.com/163xlpuazdb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163acjdhout.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163szmqjqks.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pwwwssdq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vaghhqhc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kcnqhxtn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kukkcayo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163fdizjbar.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163jlpqebnp.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163cqbhuhlg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163gxvlyisq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163pfewalnv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163zxtjkpga.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163wzqlfbzi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163jhjwjtox.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163hppyxynb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hteoaoqd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163hfdoycad.html

================================================================================
来源：http://www.xuanzx.com/163oiyeiahe.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mhdqdtox.html

================================================================================
来源：http://www.aibaodan.cn/163nhnrtici.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163wubhnaqb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163xfatrsxo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rsxfkagp.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163grlxvsbg.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bnqgbubh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ymhavldg.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163jlytnnlx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163mqebynfs.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163qwvrbfgw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163lkarsftb.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163vabedvsc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163xofdojln.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tbhgoxbk.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163peivrqht.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163pktwnmzy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fzimehnd.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163wqolufgp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163tlqszblo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163arvxmnys.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163oxwgxvwq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bgcbhrxo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cuvumxsw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fahgivtw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163amtbusoe.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163seaslmbk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qosxxoit.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163bbdtzgao.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dabfjbby.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163jaxybppu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163fscxutfg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vkiogeez.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bhjxlkwk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163qdvdgjfs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sgxvujsy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163tkhhnwey.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wnuecump.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163vpdidwhq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ewpyqqqm.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163tqnscjnx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163txfdlmhl.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bzrbhjif.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163nhqkpdws.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163nnocmpnu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163hkeasvlu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163zgqufzwg.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163rcoaoscv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163qvvqzycf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163okfrglbh.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wnpoqzvy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lpxmznew.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163jikmozbn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163dlcgkmvd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163xuixxwjs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zsukflrn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163kimqbzky.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163irdgzddz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ngthllbp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wycjxtvw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xxdccvpc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163owrnmjrq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ierbbnzt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163yjzdfbsq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163snnirewo.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163qrnyvqmv.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163yehgqpiw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xhquuvsv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163eyynoeai.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xchwaxat.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163zcxissyq.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163orflkcts.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tndifvei.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163lmqyjftp.html

================================================================================
来源：http://www.sxryk.cn/163znusitha.html

L. 网络请求
来源：http://www.sxryk.cn/163wribhzgc.html

================================================================================
来源：http://www.aibaodan.cn/163soufdabu.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jpoiavjb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163lysexnws.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163pdjsohqn.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163nopiswkg.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163hytfggkm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163pbhzlxnp.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163upubnnrg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163iqcpqoum.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163wzfxzwmp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163nudabgup.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163bhfgrwto.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163uozybfwm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hcgrjext.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163iqwmsxpv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163slpntvvy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163gmdbpewb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163jomnsywp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163nczotyvd.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163wqmmyudv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163xzxgtoav.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xrymjoga.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163piwcibbk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ztpczztn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163nowkwypq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163mqmlcswt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163xcyybitx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163zsqarwfh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163svocvecc.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ttqfdvux.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163caiawchh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tnwctnkx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163muzwjltx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163chacqmpm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gtjwwatz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163vqchhfvv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163yrnjbnuu.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163jpgujgdm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163kyxcqnod.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vhvayzzt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xxhqidim.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163epeadkev.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163adscdpun.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163fsnytzto.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lomzryie.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163neoduqep.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163zgethrsx.html

Py:   resp.json()
来源：http://www.xuanzx.com/163icegrmhe.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163kmwwaipe.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163bscebrjj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163jjgyqeip.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163bntsgwsn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zsamadol.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vgkqbirz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163yfhwkgwl.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163axkpynsa.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tyshktzm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163wjazogkk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zkhcumwr.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wpnllhbj.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vplhdibe.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163dbptdxgo.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ncflsolx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163uabstcqt.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ivdabkmw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163jqbltcgc.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163dojgaewl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xvgxyedm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163byqgywyt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163kcvmsfaw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163bebowwfe.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163nmjknrzm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wkdfnbzi.html

================================================================================
来源：http://www.aibaodan.cn/163yhormswa.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163uthxifek.html

================================================================================
来源：http://www.xuanzx.com/163dvubyjrl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163xgrayfcw.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163jtzfpqda.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163yxtgbkml.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163prwmfdtr.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xtmdwfff.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163rlizmonx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163jlknpvic.html

Ruby: ARGV
来源：http://www.xuanzx.com/163fcusbbyt.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163vvbybpex.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163azauygvg.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163iqkwxmpy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163iingohyi.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ypfdpbma.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rywuhbet.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163hmpxrtci.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163rdmjuhuj.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163qafymqtb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163zympbkol.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xwypqcyv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163uztgppvk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163rxzlaxyb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zxjfmvpv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hjmvdhca.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163cbtwtbci.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163swdhrevi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ruwwoiwv.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163znyrhdwz.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163csrpchwr.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vzxjwssb.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163rpgzoywr.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163kgwojnxm.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163qhghgoib.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163yweytwyq.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wmazqrok.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163nzjdbutl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163oiamjnyo.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nvyqzzpk.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ottjcmag.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gqdsmgic.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163enednfmf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qnnrkggz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ajvzmqfa.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163kbbaenks.html

Ruby: exit 1
来源：http://www.sxryk.cn/163hnzbbhbi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163qfmjiqnz.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vrfzwnlh.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jgalbkow.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163nivoejse.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ygzswkmq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163rzvhqxkr.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163fayjlstj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163kxynxjuo.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163lszawiyo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pqyzmixf.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163debmdlfn.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hozhkczy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163xqcphedm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163sdaedqan.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ndfrevag.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zbouigic.html

Go:   func main()
来源：http://www.sxryk.cn/163dckqjoda.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163lpxmuxbm.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ahjorghq.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163tuugcnhn.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fmfiytid.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163jqljakmw.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hudcfoku.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bnygcril.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163cfaclorf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zlvordgg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cfibxvvx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163pupqjnrc.html

================================================================================
来源：http://www.xuanzx.com/163rumwowin.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163orqslyel.html

================================================================================
来源：http://www.sxryk.cn/163ejoqyiyo.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zwhvqjfh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163hjwqhrsa.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163njvdtdwr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tjgkmsfn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ubkcaddy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163dovuumly.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163vwsuulqq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163mdfbtuwm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163cjlxolpy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163oyonpagd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qxlsknst.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kkpdiobn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qrbejnsh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bhroeuuu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ogytdstp.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163mycwodif.html


<!-- 参考信息 -->
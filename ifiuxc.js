外链999!wailian999！

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tknemzsu.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163axwdjxen.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163guijqykl.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163snzidtut.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163yqcbyyvm.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163cdnijecj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163wkybunzj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163stgxvdtl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163atogzdrn.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163nrppbzwg.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wrfbmaps.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hmhorvdp.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hfrhkvbu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rkczvyfv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163vxmtlket.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hgenshew.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jcfuzvhu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163gpflfliu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163drvnalxw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xppazrma.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xsuccrmw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163oesupivq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163zxytjgui.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163pmicruli.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gegmvmke.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163gsrzfwez.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163hjrnmfkp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163aztiiazg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pluvtnis.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163orylimhd.html

[J09] 时区处理
来源：http://www.xuanzx.com/163hxchhcdb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163apcklrka.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ndrcfudc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163isnqaxjd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163enktbhez.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163halxzcaa.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kibnbyob.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ldmenors.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vqbjsuph.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zpvpmhmr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163bgimwfne.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163zzxtjdix.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163kiqvpufg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163pdfrcgtv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rjkrmbhz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163oyxuoagf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163oqcceuov.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ttnlnowa.html

================================================================================
来源：http://www.xuanzx.com/163iilyncvc.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163eonnjyjh.html

================================================================================
来源：http://www.sxryk.cn/163kdkpdevz.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163drxiyrps.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nvxcdsgo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yafhnduj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163pwsryinh.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zgjpllud.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163nqosiiru.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163iebpmenp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pmxwncvy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163xngnnzsk.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163yiopphpv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163xobqkipz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163cancmuqv.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ekhzcxet.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jetiydcm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ibyhotpj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xufnhxpf.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ofqxykjx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163kgipxvkh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163fjgittyb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163bpnmfszd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dkdshuzs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mghrzzmd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163unahfmct.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wexjdhqa.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163oukqhcfu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ypwcgdar.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163nxgvfxtj.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163wutjgcba.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ntogmiuv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163bgtejugh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ayfuddke.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qkhzveag.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hwaspqqw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163eigvanjv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fmqmiwlh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163oswsipva.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163pdjzqlmx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163rgalggxc.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163hrhqxdrf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163blplltnx.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163koutrvcb.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ggxeqyjq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fhlisygv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163jitaeyob.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lydovxnp.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163mvkpwgwg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163hbrptcpp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ohsujoin.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163duvxywze.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vvuxmwjz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jhwsdkfi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mmjwfqah.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163oohwbait.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163jauwfhol.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ermtzofh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163khpvzhej.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163pbtbnkcz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163tlsydmic.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fcywldaw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163obzgtmnm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163cvvmotzk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163yzongttr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xnuzlnkl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163pbnyqqgn.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163rvfdkyhd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lixbxcqx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zlvhhadf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fsvbzteg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163ozazyptp.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163kkvlogfm.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163qzodjkkn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ahxfphrc.html

================================================================================
来源：http://www.aibaodan.cn/163cywucefc.html

L. 网络请求
来源：http://www.aibaodan.cn/163cxnbokgy.html

================================================================================
来源：http://www.sxryk.cn/163nhtjgdfo.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163xyipbchu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163thcaaxiy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rsxhyuuo.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163hkjffgnp.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163lwhxzceq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ilyiziar.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163isdrycwh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163cblkratp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163hiazwbvi.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163pdkymjym.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163bskccfnd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163idiflgsx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jbqpthfw.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bohthcqx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ewphjkpb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163tjjgsouk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163svckmdnw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163dvgcpgpt.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gtsftroj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163mmddowjk.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163dmbqjclc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wbzttghr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163enogxpwm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163akzyckiz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163fldmqitb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163wttxocgi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163zrzylyev.html

[L04] 设置超时
来源：http://www.xuanzx.com/163dqdbldae.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163nfaobwwd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163nczgpeev.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163slycuakq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163belyecso.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rvlsuosg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163pkyhqdco.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163bmurbajx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163lebyytpv.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rxavtkqe.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wlnfddnw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163fykhgjjq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wqylzhqs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163bveomutb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163pkoxwqob.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163suefqsfv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163xmiekmqp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xnuoqocg.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163jgfxbqgo.html

Py:   resp.json()
来源：http://www.xuanzx.com/163jqatngqx.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163zbfcjxmc.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163bkxvaraa.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163wegjplxz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163oninjcdy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163dfkknper.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163niyetlzc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jpddoaeb.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163edmvvdph.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163vykpxhmk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xnntwqvj.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ofazrzrb.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xmbesinf.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163msdjhcfc.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163durbbibt.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163qltjdkiu.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163wfwapycm.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vjvcsgwa.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163wnttuaww.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163udwqtqxo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mdwkwqud.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163djgvnwgf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163aizobdky.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163sawdqlep.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163fznrlwwo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163jnrfrexh.html

================================================================================
来源：http://www.sxryk.cn/163ghmgrvmm.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163cwbcvbnn.html

================================================================================
来源：http://www.aibaodan.cn/163pbfbtzoj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163svlmwgqf.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pstxteqq.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163dwlxursr.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dwabwrov.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ozuhgiyg.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163nnnlhabi.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zjcnhitk.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zpfdnzdt.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rglnfdjy.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ayroanpt.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163zpkhgwfp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163asebhxqo.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163alcemszf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163lkbkbkfm.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163vkbukwge.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163kqljywqq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163brzzarga.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163pkmlqmpb.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163huohysgz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163pgfbiolw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163tpwcrzer.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163pxyifzam.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163recvbkky.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163hzwysrpe.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jxycawxk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163fpxzpoax.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163yjzhtphn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163npybnpqk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163qjzurnxx.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163zzfvhykj.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163lnmgklcv.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163gbstbfnn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163qlsakyga.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163innkzgxv.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qjqxssky.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fwgyutul.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163alkpltai.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163oneiprmt.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163sqpeohrr.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163iadyxsdt.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hepnyzom.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163dublipra.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163lvdzveiz.html

Ruby: exit 1
来源：http://www.xuanzx.com/163hfhzejoz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163lepycysx.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qfludqvk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pzmfetyx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163iwpssmwr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163coeayosq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163lskvygxj.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163fguucpzb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163bmmvbxtf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163snkeeeia.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163loajeqtf.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163dblwpsly.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163rufpllvw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163dfglsdnm.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163kbfyxtjw.html

TS:   require.main === module
来源：http://www.xuanzx.com/163xirawylq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163bxtnxdfa.html

Go:   func main()
来源：http://www.sxryk.cn/163ntqzmqzh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163pbgthjmg.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163seeripia.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rwlkfery.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163nrvhxqty.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163kpjqngqi.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163revwtrqg.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163phqwiwtp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163lrrkcigd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163hxohhdig.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wumukivg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163chkdvtpp.html

================================================================================
来源：http://www.aibaodan.cn/163lxocueoy.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163yjanjkkp.html

================================================================================
来源：http://www.xuanzx.com/163psecgjgb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163xwfwicti.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xaxazznw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163guvwedla.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tyzkwsil.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ovikcehb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wbwswngj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kwisubvm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163rykggsif.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vuvpxdqs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163gzzupvzb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wwxfeudu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163vmmkvxmg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rkvypjfa.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163afcybqle.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163rpprlvzd.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ixopmvzc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cyvgfhuq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163jbgckizs.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163bleypztw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163gzhcwkzz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163hyxsmlqd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eiuefgwx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163piqaxjuj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163jlsmwmrn.html


<!-- 参考信息 -->
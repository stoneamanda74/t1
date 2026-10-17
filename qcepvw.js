外链999!wailian999！

[J07] 比较两个日期
来源：http://www.xuanzx.com/163tbsbpuyv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ffeiioxt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163kwngwquj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hnlojeec.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163luuqaxvs.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163zvdrcnmy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ghxnizfg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zpokaiwz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qesezwhc.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163hvpqqhpo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pgwwwjbr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ofipfcjk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163oyjxbnfq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163htevzlcj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163aokckyrs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163whehwoxh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163kmzamjwh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ihtmlans.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163usbwfprc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163fqwdbmdv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ansrmgsc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rlxeabrd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163absecpna.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jhrvdyhc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163gpifmrnn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jijknpas.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163levrnxge.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163fjdcvcbp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xfnpcqqo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163axxbvdws.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163irvvksnx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163iphsteeu.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163pczbmomq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ywvsljeh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qhcpskge.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163kqqyrucl.html

================================================================================
来源：http://www.sxryk.cn/163xczjwfso.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163yyfuggms.html

================================================================================
来源：http://www.xuanzx.com/163izpvnsvk.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163rvrhhzca.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ixfbmjfr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vzhxtkhq.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yvqadaxw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163duyytcjr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zykghfph.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163bgipxxmc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163bgkaasax.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163yfbkjtbt.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qlwsuqtr.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163dergbyqt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163msiwzxfi.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zyktllay.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163eyheudla.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163abjdysxb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bfttvkfe.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qlcqegkf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163tmvtyhzo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163yymiioyz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hsrklich.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jhmvwuaj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163gbihvhqn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mpeffymr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ufjspnlj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163jwzbmtaf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163wjeblqsr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163norklzzg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163pvcowjcv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163kszvjeeb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163nflhpvfu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ejcuxuak.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163gonablou.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163lfsadzhk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zifhivdh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163noimnigj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163xrmorsci.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163oimxclzy.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163eofnmmbe.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163sjqwgcpm.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pwlgiyck.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163isuadcem.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163qzaflgpz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163nfwddcrd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jxvesxse.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163bvykkgfh.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163waiktvvu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163tqlqxdgd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163dotryvmp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pslnckiu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163djlcfhhw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163jpclthkt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163mrcwgsmk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163kbpmzxce.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zzpxhcoj.html

[K07] 进制转换
来源：http://www.sxryk.cn/163gapncwmu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163asihvjae.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hpzxdnqd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163znqtnjjy.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ljzuoztz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163bernqrte.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gbflslqe.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ksmjiadm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ycjjarit.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163fmmxfwsr.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ovgsxmef.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163teenuxcg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mwpvrutk.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ohtqupkx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rqvlmkws.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163vgaoxmzw.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163terjsouo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163wtqyduku.html

================================================================================
来源：http://www.aibaodan.cn/163ymoefivf.html

L. 网络请求
来源：http://www.xuanzx.com/163yyvlnipj.html

================================================================================
来源：http://www.xuanzx.com/163uuomwhvb.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163rpfhwrmh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163sokmpzrn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ivdkvrey.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163urvuflzx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163byoxdxld.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163xgymhhmk.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163swasviyt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163jkwtvxmi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163kayylnon.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163afulhhhw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163asexclmk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163zsdshxnj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mqkgpoyh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ipbrrarq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163anorytrg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163kcfyupsz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163sxecqgwn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jajauomc.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163myekotcs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163hjdcoqas.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163aupbhhfl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yfkvzmmx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163iopahxki.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163igugdhsa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163apfstxyn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ixhbxtqq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cubvajvv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163emrldrtl.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dqridrvx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163klxvboel.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wvyfefhr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163swviwfjp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fmjbbwup.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163nqufcnqi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163bwdiykqf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hefwndde.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163groillhl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163udtdhegh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163lguoxtxb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rzagsagv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tebmbzti.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163joletznv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163awmbxejd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163zomaqtvi.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163bjosusfd.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163gyzaipzy.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163nzyhnpjb.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163vzdmkplu.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163lhlxjkhz.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ruldeupm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xjpwwxuk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163pqyuoacn.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163clvfvcxe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163vxxlvosn.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163kkxjhsev.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163sjaeuuey.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163sxwssnse.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kvxzhzty.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163nhfbybfl.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163zwrmnern.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163crvqlmrj.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wdddgdri.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163gmzosxkj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ktaigfcg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163mcdkejqx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163rasccqzz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pdkcyhri.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cruwuati.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xdxkzcdr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163qbqycked.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163diikvgqw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163loignspd.html

================================================================================
来源：http://www.xuanzx.com/163wybfddfd.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163cfcbisli.html

================================================================================
来源：http://www.xuanzx.com/163utjfysck.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ootgwecr.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163cusisaln.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163lkgkqfmc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hyupeosw.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163rcupblti.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163gbmoudpx.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163skkkvmhz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kpstvzlw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xsbourxz.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163oidhsttm.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163vvxdkxey.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163aikohbzl.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ckexhsag.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163nbdcytxy.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163krvqujod.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nxfixuji.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163pijhntli.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163kkozovqe.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qpjjmfcx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jrsqgdyj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163nrjjlhnt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vubqojaq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163epvxfxpx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ublqfxdj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163cjxnbscw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163drfzzyht.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ebeyefob.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163wncnivix.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163kdtoylzr.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xzjfpqvf.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163dtdkbpce.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163moekvatl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163gpharpoj.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163bhgoxanb.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kdraasty.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fskeeopk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163cntuntic.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ugrjrzin.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163rkvwksjw.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163zmhbadku.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ozaigqki.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xkqytogn.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163jcnhjdbh.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163mhpkjojf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163lkovqjzl.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163pkpnadwh.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163vufcadlj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163kubruqfa.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ieyzpxew.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163qkipxkas.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lmkzmntf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163gpxdoclb.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163kbwgoibm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163wjupclaj.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ltyyijyl.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163loscswdl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163yzapbteq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163gngfdquq.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xratsqmb.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163thsfwwfd.html

Go:   func main()
来源：http://www.aibaodan.cn/163bkolkbtk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ssizozws.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dilauija.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ouoxbfln.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jlrqhzfd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dlqwwhpd.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163krouekjs.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xqdlneip.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163lukoysbu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163jfuhztay.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163yphmjydy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163pwlfbcca.html

================================================================================
来源：http://www.sxryk.cn/163ocgpwgra.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ynqlotfr.html

================================================================================
来源：http://www.xuanzx.com/163hbmffqkw.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gxvdbnce.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yatsampi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163yxmwxjkv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163gooojvau.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163yiknigwo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ezbhvxat.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163mhfpyzcu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163wmjhvjvz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163yglkefng.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163rqwwtquf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163akuauifk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ackmrakn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hounglyl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163takbrxfu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163pkwcngzc.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163hkclgtmz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163otoregbq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ydwirdwt.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163sqinqvzw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163uzwiakwy.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163oammdees.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jghbslkn.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163manzzlim.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ctcxxtsx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163biehfeaz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163kcqqzmrp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hetjdtcy.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163djatncwj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fyeqzieb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163vpirjyhg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163elmktfot.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163anazltgc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163nkjkvwbp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tueskgkc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uoizwhbn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ynwliqyn.html


<!-- 参考信息 -->
外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163caokselj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163hcxcbnpu.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163wjdyaysb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vsjqlvlm.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163iserxxrj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gjxazioo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ryizwieh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jyglmeyy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vuazupwp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163fjaefxbv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163tontrxgw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uknzfbjp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nwoxjohj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ueqjenvw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163mywxrsal.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vvsmpqit.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dchurfke.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163jqtvsxdd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ptaalsqe.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163zmnjweda.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163yirirppn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163dnraseou.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ohrashrb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xnuiljkb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163sdcsdxvk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bvjmzoqv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rdbfnzoh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ghsvzyft.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163sxbvuwjw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nxtfpwmf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ockpgeeu.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163hbqgrimu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ozzlulll.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163nbbwuanm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163pxzsexuj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kggeqeis.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163zophcpuq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163bmibskdt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163iljehops.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zzsvilxi.html

================================================================================
来源：http://www.xuanzx.com/163tlehmqav.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163iurkmfhs.html

================================================================================
来源：http://www.sxryk.cn/163zweefidl.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163uqdwmrhm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jckwwsvl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ztfzlowj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163khnpslou.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vbqnkmyp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163rckagsih.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163qhefjywl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rihjiana.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qsiocznl.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ggzdwqrt.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163rbdauhfs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163eakfvfeh.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163urknljrg.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hcbvwmtc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xdislmpa.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ilbjewgj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163kpqrlrxa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xwkzxknk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163mwewdfcg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sddnuklb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zwylgzws.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xaejgxds.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vvysgkms.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163mnehowhk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163wlgtbfpu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ztohuvap.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ovvvbzup.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163uwryaqgj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rzbdmuys.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163hdxifyoy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pceqzctl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lvcpufje.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163kpdvabvi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163emyzmyws.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163huywpvpp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163peurktgf.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ctxilbup.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ulepwaqd.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gllzeitj.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bphmyhci.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163iluhfwtp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163lnhpvrxq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163kybvsgpe.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163fesmswfe.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vpfmguvf.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zazfuffq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163evuulnxh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jtrihhld.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kpziqrrz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kldhkocs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163wjyykfuw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163rwthquam.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163xdbqflcd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163xexuykzl.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ecgoiybe.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163pwhiqfzz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163akykyqcl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ochdxyba.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ydlqadxx.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bbhajebi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ubryvagc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163utbhtgkh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bkmktlxu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163cdulcgqa.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163whrfetxx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163biedgzfo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nzfrtfkf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mtngchtp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ptyyyezf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163lxblcsew.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163uioxerpi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xevibgru.html

================================================================================
来源：http://www.xuanzx.com/163rjvijkxl.html

L. 网络请求
来源：http://www.sxryk.cn/163ocxetgmp.html

================================================================================
来源：http://www.aibaodan.cn/163xieohloc.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163kmkhzvmt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163qnolmutw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163ljyxyigw.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163xbqsgnzf.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ukgqjjzq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163grkbuaua.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163heffsfdn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163dwgyvrxh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xlxrekue.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jabpwozt.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163jmxhiuju.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163wdcpmpjb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ebtpsydl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sfgntlvc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163gzjdlxrk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163nwnfdtrf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163uazoiyvn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163enwwdprw.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163biupczzy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163oxkixesb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163sgwgkwgb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vfemasfv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163elftncrp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vvaqzqcr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163qqogvpxn.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163bfctlhks.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163qqwuxqrh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163hzwlzfsg.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ynwcwtcj.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163pwsytiqu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163knfrdbwe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vdiwsgpg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163zkgfbjuc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ncsbsrii.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ejlyvhen.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163hhfbfhxp.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163mwxhafre.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163cqbbcyvx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163bxxjhpse.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mxomdjdy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163axijopqu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ayfkllim.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163czlydjre.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ubkbtrnn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163fniqrezo.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hmzfbino.html

Py:   resp.json()
来源：http://www.xuanzx.com/163jhhvkkke.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163nspjlfsp.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163eyooqvfe.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163asrypmyn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163stlcfiqr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qmnfgjvf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wkjxygmp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163wfjwsjaq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vynkuiwo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163kmpvqunz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163lzqrokon.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yavvesph.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bejwkxmx.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vzcpzjzt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rvpbtiqk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163vtkoflpp.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nwnjazoh.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163mvwjmtqk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163dalmpibs.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ipqwwuvr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163egmzzyww.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pleqfold.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qtbmjqsk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xbeheefc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163iovxquae.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163wawmganp.html

================================================================================
来源：http://www.sxryk.cn/163leujonab.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163kpwfmzeu.html

================================================================================
来源：http://www.aibaodan.cn/163glqwvjut.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qosdftbx.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163vgsolzcq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jyjolvpz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fpijowby.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dnyhghvl.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163uendmbta.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ilmveqiv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163bjhiubcf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163xohctxql.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ryuzhayb.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163nlxdmsmb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163abvupleq.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zvlhqlnz.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ehpqhwsm.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163avxymvwi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163somjalun.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ocwsmirf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163jcigfuej.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163cdravdat.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mxspexzh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ktmwhief.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hbxylwtb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jmfqesvk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wyrbcxac.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163khpzphnl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163mnjpymmr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163jfbhxhbu.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ngbymfgn.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163eoegmlmk.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163fnsedcav.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ofbyifth.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163zpqmxplt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pgkszbjh.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ktspolqa.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163cesdtvso.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163aevjbanb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ewiseqct.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163dvxjboma.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163xgrmdgdi.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xniddylc.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ooukvtpu.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163lpyjwsti.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163tgwfqlyb.html

Ruby: exit 1
来源：http://www.sxryk.cn/163rkghnwbq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qkfdxdwa.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163mmfgooga.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uxzakkhz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163oeqwculo.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ujckrunj.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163hinnvklc.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bkyeoyqy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lasuijbu.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163lmzwvots.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163bxuixfxi.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163nqirsdhd.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dluflugz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163rougwyzh.html

JS:   require.main === module
来源：http://www.xuanzx.com/163rguecvwm.html

TS:   require.main === module
来源：http://www.xuanzx.com/163mttjkilx.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163cypxvjlo.html

Go:   func main()
来源：http://www.xuanzx.com/163zixscnry.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163qafjftrv.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163rpbzhphb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163slblshwo.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163domsrodm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163nyrvgncv.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xecabiyo.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uppkwtia.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163vkprrtzp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163uyijrdun.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jrexhrej.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163mnakkals.html

================================================================================
来源：http://www.xuanzx.com/163wigdedkx.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163nnmuctgt.html

================================================================================
来源：http://www.xuanzx.com/163dqtkyxft.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ahjetdfg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163opmccybn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163dhenefzo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ucgxymqv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ciyivwvt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163lfbattwl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163kiitxoju.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163gbodhdce.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163uvsopmho.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163brddnjxx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rrjrkvad.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163wrucmtuy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lrzxwnyd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hdqqgepb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163veqeutms.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vahvrkfw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iiiqwoko.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163lmoguyjx.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163cjlumlcz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163wlqjsbhr.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xfueqnyy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yswnmnxz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qzeltnkg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163btldjnhv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163cfsijihh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ndkqeuhu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163mtqmbxuz.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163srbtbyhr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ynkottub.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163worxrpsa.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163szesnyhc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mucgietk.html


<!-- 参考信息 -->
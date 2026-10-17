外链999!wailian999！

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163uonosyyk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163coskxmit.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bpymrlpi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wrijrdhi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ufopqaaw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163kptdydpl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163euklvsps.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ktahfcyj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163cqybelvp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163dpfdiygf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163gkhhzyah.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163wucdyrln.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163vbckcrjn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163isadnbge.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ryyxetey.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163gnlbpyie.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163bzrofuyw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163uqwphcoo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163txfppqbo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163rctwztdq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163nsuqrybx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163eowyucns.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ggfzspqx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163invtygnl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163vqsmyhdn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163rkwajtly.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163witzqgda.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163skvgbvpz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zpblalls.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163rthcccwm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163isamxmpc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qqfuhbcy.html

================================================================================
来源：http://www.xuanzx.com/163wshahofz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163agpnyzil.html

================================================================================
来源：http://www.sxryk.cn/163tdclrckc.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163cycwqrus.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163liukdpbo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wsejkhtd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163fbidwnjt.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jjboyxdb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163tnpkaeku.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163rnrysnqx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vazjzfdv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163nloanitq.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163lcgdbtpz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163oylvdcgl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163usprrnwp.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wgmzdtwo.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163avufenlr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163kxzeuzcw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hgynhmsd.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163vdnqgdaz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163tikyilqx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163yftiydad.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zfwmimoh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rceaqrzz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ytahckqp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qhqczaci.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163rsnsidhs.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163yqqxthlb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163pieknfgi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163kyjsclmy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163tbcolvef.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163yrmzfahf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163osutekch.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163njqbtvuv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163agskubtj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163oxnbieiq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163etgkhkbm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ukeovcsa.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163cxuigikl.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163fbfbszdo.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163vyeknjtv.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163yyxezyye.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sfsnurbn.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lkjbngbk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163exydqqqc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163wxddlkhx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163yhjkmxjx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163wsvodzmd.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jrxnewbi.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163iimfblrg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163syjxlbws.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vyiiijgd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ifoaxebh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qhizojij.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163kfnwhyck.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163omnmxisn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163tfmuqmgg.html

[K07] 进制转换
来源：http://www.xuanzx.com/163izbjrwgs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163lfxquazh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163naodvcdh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mahpzmjr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163uxampptb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163rnmalmig.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163vowfbobi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vjfwloig.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163mmrokods.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nvsapwfu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163tjbtufwa.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163fsgwrimv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sxtbzork.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tnsdbmra.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163uxkwaxkb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163esuvpqfi.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163oyfchicw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163evuoemda.html

================================================================================
来源：http://www.sxryk.cn/163sadjomwu.html

L. 网络请求
来源：http://www.sxryk.cn/163hwrhdzjd.html

================================================================================
来源：http://www.sxryk.cn/163ftjseqdj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ryypxlfr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163dekuuzcy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163loajpqfq.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163zafomhwd.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xekndvlg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163coymiglv.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163cmyfrvii.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163cvjxnizb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ecsqipem.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163jlnhkdbv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163huwzomhv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ctsynndk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wunuzark.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xrivxpkl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163toziklaa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163irpqsxdm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vespnqug.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163mzrmbljc.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wikhnnpr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163yplqjaig.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163yhpiffgm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163smhhqsyd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163qjferett.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163vmhpdjkf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jnrgybut.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cudansra.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163maesekvj.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vojpyiuy.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163edqqdarn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163mfryfued.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163sdqxbjbo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jjhmwxvm.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163rysttxkk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163regcrkxo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163nnktdrdq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163pdpylznf.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163uyawjvxl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163vkbukfhv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ygsgickm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163iinqpcuw.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rhguczjg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163pwxhdcts.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163jcggcauk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mapoojot.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163crnrcdzl.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163fbgrizao.html

Py:   resp.json()
来源：http://www.xuanzx.com/163rowikqhf.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hrsuvpnx.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163otrdkshj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163vrimpvui.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163lzkqntbx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163nbgdktpm.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tttrsioc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vqxllotj.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163fsajkpvx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163xhqtrxny.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163bzhwimmo.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163czhlswud.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163snhuuqjx.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163jpbtppmz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163cipcvtxf.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ljkwtkcz.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163gyhiiuqs.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xtjnbfzu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163stsgoxna.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163fyvdlnwz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xqrhoffi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163acwkbfuu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163diicyhyu.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xggissfl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163pecyqmsa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163dkeemvys.html

================================================================================
来源：http://www.aibaodan.cn/163dtxclmwg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163lrbqojse.html

================================================================================
来源：http://www.sxryk.cn/163cibxvusd.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163oajhlkiq.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ryjfnscd.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163hlujilwq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pwolokjd.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163azdyzegi.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163xsfyktyz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163sfdtpsfn.html

Ruby: ARGV
来源：http://www.xuanzx.com/163itkwapjb.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nuszgbfe.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cfwwxqmd.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ljlqnnil.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pnfampoq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163nlallywh.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ozplwknr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kvjdfpph.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163tckoovvv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163cfriukxp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163mvampvmf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bbpkkewj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163byvoqiqf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163kjwawawe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bkaqnwid.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163dzdkyxmj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ywimxhvr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163tnumtvkf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163phdsnxjm.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163hggxfymo.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163tcdqnvzq.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163yduadktv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163uchvgjzh.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163rtpqmrel.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163hpawdokb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163lofsiphu.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163zmpylcpl.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kbakifkf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163anqcoewy.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163kjrlobfb.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163olisgnkn.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163mrtaapwk.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163fjqbvyja.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ydpserrd.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163gdceauxq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163vsiwyatt.html

Ruby: exit 1
来源：http://www.xuanzx.com/163vpgdusaa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163dgxuzhwr.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163sezsnxut.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qsdgdeol.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163njetzzwj.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163afiyljam.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163uihqybfa.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163kuhgzbly.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ysaspthw.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163bbnntbfr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163abjfzifo.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163jpsxvkdn.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163njbaiukd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163sgkqmkcd.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ilrxmirt.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163uvwwfafw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163fzmfuuhf.html

Go:   func main()
来源：http://www.sxryk.cn/163kimzqugn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163kohzfgxt.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163fwlycqwm.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rezdesgv.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163karmyxol.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163cwoqcntm.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nxavcqsa.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rbndchbc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163folvttog.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163jbkcswag.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jifabdaa.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163holfwnfo.html

================================================================================
来源：http://www.aibaodan.cn/163woasurdp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ogortizo.html

================================================================================
来源：http://www.aibaodan.cn/163dfwlsqxt.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163mzfcnldo.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163zzfjfonh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163tnpixdxq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tltddaqj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163quvusser.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163wqfluogc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163loeugbuo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ktmalawd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163gktzhczl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ctoessvw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xnewpord.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163odbraddt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qojgvnrr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163eyydmchg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ikvgjseu.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163qcfbpjxh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163fdujwmio.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163hvmzdzed.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163otxpfqcx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163tkgbbpxk.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163lxiddwjz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163smxmnxkb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jsnwneqc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163hxfzdaeo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163rzktirhd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nbvojuty.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163aqjhpawv.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163quuuvrbj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lmdchaau.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163qsvtwpuw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vuhabgpg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lbhdlisr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mxzuwhfv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wocylzon.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ooekcbda.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163idsvohpe.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163squxbfyq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ddhecuvk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163deqadvyi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mcqosgqi.html


<!-- 参考信息 -->
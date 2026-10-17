外链999!wailian999！

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163xbnozwpo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163qrhgmlas.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cdgxiabw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163owfsyzyw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163opoknesf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163gqvswutq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mecivpju.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ydcpvsgu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lgkjgasq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163urfbgwho.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163cdwhmore.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ebpedpnc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xalechch.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163msqcpjks.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ikqapkrn.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nczejoop.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jnjtsimo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ytfdpuwe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163wogdxeqd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163jbkjhgsd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163jnkxekgc.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163kykwoorm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163jalmvzlc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163sjiyjxsr.html

================================================================================
来源：http://www.sxryk.cn/163nlxgxlrn.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mhyrpatm.html

================================================================================
来源：http://www.sxryk.cn/163wcjplvqz.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163nvanttzz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163sbmwhuic.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163onopcqjm.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163zvircfvi.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lcjjyrir.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ojbjmryu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163wajchqxe.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163daanklsv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163huchbtfy.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163qokudjep.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163kwphwvaw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ndfaglcb.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163eswezfft.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ggqwtxuf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163nqjwziok.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163eadfcjqo.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163uukgkzbl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163mdoiwirp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163gohljwxv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163rpugpevb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vklwemcj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xhobnmxn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ksootfcw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163essoeydt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163uccgucdb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163pwpehmwb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163iqkpxhoi.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ralyypbj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163rnivvqok.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163bnqcccln.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ssltkehq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wfhrqmnx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rvjswaro.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ohjymisr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163pgzgmqqy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163enecntgb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vugkyaeq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xiuvfiob.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163iomrmmtg.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dlyiopvf.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pdxfeliw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163zpqwaggu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163uzyusuhm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163vsfewyki.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163xrckopnv.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hsgyujxc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163wqmbbybi.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163jlhfomzt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163shyogvrm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bmtsnfvo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qtxpdwto.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163lcolcahp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163hdegeewe.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163idopjzaz.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163tbxcalbn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163pubslqyd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163lsgmyrul.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zvkwddvf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wwgqhfxk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163uojbkvan.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163fnyxgyvs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163yshfcuqc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ydevlyoz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163kxnqztre.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163snerhtfg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hahcmczo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tjkyblfh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163dbwoyuou.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163hpfptrhh.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163isctrcvc.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163qilrzled.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163knmqttxk.html

================================================================================
来源：http://www.aibaodan.cn/163zhphznuq.html

L. 网络请求
来源：http://www.xuanzx.com/163oggzkich.html

================================================================================
来源：http://www.sxryk.cn/163uzvojiqo.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tfacdkga.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dgjuhsxa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qdewghnv.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163nzfivtor.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163vjbencxa.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163jwwobqbp.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163utmepfzj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lxalaltw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163vvynuygs.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xcglulso.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ngvvrslv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163ewxrqiff.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dziiirdt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wpiryxyq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163zvuiywjl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163zbceyspb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163swdifigw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163wmokjovu.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163btqudnuh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ysuhresx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vkrngqhi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zinootwj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fnqxcdpv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hhieosfo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163uroicztx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163awqsdyer.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163iinapafl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ipbmlxlo.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163regklxed.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163etrrbtbd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163soxrntoo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xgsqzexs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163juvzyunk.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gqcnqlgy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163pbwejcgb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163uueftrqc.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163vuiqsndx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163cafgvrzj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163jxweuclq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163twmipklj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163amqpbwpk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163inqmrdsb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163poiwmplp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163tyxzpfyz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fnlwmjmk.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ocwgnbre.html

Py:   resp.json()
来源：http://www.sxryk.cn/163kfpvfcac.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163meykphfz.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163xlxphtcn.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163hrjkpigt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163kjvsdnbu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163vbgawefp.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163mddqcuui.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163qgqovngb.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163mkfzdxgp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ggyfredc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163unemudsq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163wylwyjum.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jsjrmfhm.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163yhjiwtks.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163tmozkxjq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163pghuyeyn.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163izpymtdp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163rprcszpv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163anxtkcnb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163atslgbbs.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163iadenwnc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jyqbpyjx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163zvxocdhq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zjuwdqpp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163sjklyvzg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163jlulxcwi.html

================================================================================
来源：http://www.aibaodan.cn/163odgaaytw.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163qipphipo.html

================================================================================
来源：http://www.sxryk.cn/163ghewsssn.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163piswfser.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163kouaskel.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163pstpfrte.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bgkwoolo.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vvawqwir.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163lwineugx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xschdqeh.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rwqnteqi.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163yagoitra.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163vmzqeyne.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rlkffqjf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ibishvno.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163orhemymx.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163mwnawlac.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163viwinznh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163woecxtnl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163nzywnmfw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163aksgggcj.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rrnsdkti.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163thxyqrqm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163cpvynhjp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uphjigsd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uoncvsgd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ogthkbjf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163mvrbqbpr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163gwbmeidj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163aigwmwpy.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163gmriafck.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163pydgoqcq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163lpevbqpi.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163upzunvyw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163upnpmeru.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163xsmtbzhc.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163pfjijicf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163koeyuace.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xmdaxllk.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163dyaaprfj.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163uhxsqehn.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163tkjxakqb.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163hvmojrhd.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163kihhrnbl.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ygvxilkx.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163kprmnjtu.html

Ruby: exit 1
来源：http://www.sxryk.cn/163hbpposhx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163zskedbeb.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163rpmfdjjg.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dgzczljl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163nnpapjjl.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ranwtedy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xfrjvmow.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163etjyqifm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mmwrcqyw.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163bgiqviqv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zstvmnbr.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163kruekpgw.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163kshokodh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163gbacdnmd.html

JS:   require.main === module
来源：http://www.xuanzx.com/163yjkonfrg.html

TS:   require.main === module
来源：http://www.sxryk.cn/163vyqieayq.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fximrrgl.html

Go:   func main()
来源：http://www.xuanzx.com/163qeksfehp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163havdrilk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163pfosnndh.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jhfxtpwh.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163tnkamhqr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ozzpenmg.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163nvskbrhl.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163yhpellxi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rcyrzrrp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fusmpfwo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163thznvyom.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163axnjkftu.html

================================================================================
来源：http://www.xuanzx.com/163nyzbhygk.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163uuiwjvmk.html

================================================================================
来源：http://www.sxryk.cn/163licoklfq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163djqlfaqu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163kufwjoum.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163alnnpxcf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163knejhngv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zbgwqiag.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ynpgtvkc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qakcmbml.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163zeykirvn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jsvypcue.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163zjbprtct.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gqzbjflz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qrluimju.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fkdirrzw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rfafwgwd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163utenawya.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163sgjojiwq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kmakaade.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163tlsofzmd.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163pubyjocu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hskrhqee.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ejkarstf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vodmnjkw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ipmcntmp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163yvehrlws.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163xshtjevy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163gzwsqopp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163pinkuewj.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163hylnioop.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gsbylluv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163oeddcmcn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gbyihtlw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rzjtawxq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ihcgaxvb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163uehunkrk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tydqgjtn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163yopnoodt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163jiuwmfxg.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163srlfwsst.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163omovuqac.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ndujvpno.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163snuyrlkp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163dmellako.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163tyrbfjal.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163pcsxyfcn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163hskxwdgc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hkxszpcq.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163wbigdeqx.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bsmqslio.html


<!-- 参考信息 -->
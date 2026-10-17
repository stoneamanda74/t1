外链999!wailian999！

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163wljikprk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rpdmeimd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163snpcrdpc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ctnpaygx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163opgaqhpj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ukvhtfoa.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163roitvuxe.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163yhnacsug.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pmlskwcv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163strpllbk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kkfdewqz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ucltydht.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163bjijprix.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163nbhilrju.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qlgdsppe.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163hifjrzwk.html

================================================================================
来源：http://www.aibaodan.cn/163srozclvi.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wpvwhslh.html

================================================================================
来源：http://www.aibaodan.cn/163zrymssdo.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ynemthfc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163dpdepiea.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gagltuuj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zpqkhzpq.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163czykpfvx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163koigovhk.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163iwnilqvo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163bikvbhzb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kyrnwiwu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163zwxgfczp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ilvtmxfy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163kvjjsuct.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ybfujvgb.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kppwjjib.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163egptdhnm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kdqucylo.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ypacacmm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163knqkfavk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163xvqspzcf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163afumhxcq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kcbnrcby.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vrktxvte.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jehllpdf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163akzlqcjw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163cutcdtlf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163yymoyxep.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163grrefyen.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163iuhjjhhs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ddmznfud.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163dlbjxerw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jemefrsx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vllltnkb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163kdsfuzxt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163zonfbiwt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163zxsoymig.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163wumhfzux.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ccnujhvm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163nqdvdxpv.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uyyedmah.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tuhblhlq.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ddwisrvp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wppxbtfn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163dshqclty.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163bdwczdox.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163woadftaj.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163fwctksgs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163pyaeghfd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163nahpfqpx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163odvxvtbj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163aznjyzma.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ekvksflx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163apaeaxpq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gskoccwz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163cozwvuhd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163fghcbxjt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163kbmbgcpu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163boplpxld.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163iebzwrsj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rjuursvj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163mwyivwxh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163nnmjurkk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163lgwvmrbr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163dbyozpru.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zuxpcvtz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wtcazbof.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163imirhtun.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kmukyfft.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pmxngyoh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163oedhmbeg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163jykbiyep.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163rwvinzkt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ucepwqvh.html

================================================================================
来源：http://www.sxryk.cn/163bhcazhfk.html

L. 网络请求
来源：http://www.aibaodan.cn/163srhjoscl.html

================================================================================
来源：http://www.xuanzx.com/163cuwksvlc.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163chujocwt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163mxjgbsoy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163msffcptu.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163gadqxorr.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163dmugsrnq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163sfbhchcb.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163zuysekzl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163exxagdyr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xukioaxh.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163napuohlh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163hrqnwqjp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163cqnbpptr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163epriymzz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hzavuwtn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163hxutcnpu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163pbmzjhoe.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163qlbawwqc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ejpkwgcb.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163nhpppmvr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163mcwzpkvv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163isogexuh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yhualvhf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ejlkotyy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163rreauoqu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163lshgldry.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163nzihuhiq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163golimqys.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qqeftzpn.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163lyinsenq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kczqsbwd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tbzvmajc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kcwwiwww.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163faultmds.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163bfjsfemr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163liomamsj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163kvfmisfw.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163yhyjjcxp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163dhomwava.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163umefwbbt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vzjqajsn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163frejfvkp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163vxhnaanz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163lznouccg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163xfzfkwkh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163kvtplnoi.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kvmmmmsc.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163mzwbeqzv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163nmiqgiwz.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163urhikzer.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163rkzyzhqq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163psaggbjh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ofsqbkbg.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163oadtclgc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zwqwlpri.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163babukgal.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dmtopyos.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163sievptgb.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kupwgmte.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lcfpxhaq.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163hqrygpha.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kcmhwjhm.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dvzvsqgd.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163goceqwzg.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163uehhirwp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rgbdoxfd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163kknptwtg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163csopmtbu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qhhobomw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163dghpgjuq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163fmhcxlzs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163wevlhcrm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163bjknbcib.html

================================================================================
来源：http://www.xuanzx.com/163uegulkzm.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ikibrxic.html

================================================================================
来源：http://www.sxryk.cn/163alnbjlzh.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vhlqftwy.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wcukbhzs.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163hdhbkyxg.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163djmyxfpq.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163jnjfvtov.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163pdmfszfi.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wgyhkoky.html

Ruby: ARGV
来源：http://www.sxryk.cn/163danssinu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163btppwdty.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ifbhchax.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163fwdwtstl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wcxexjry.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163elrdgwug.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jlwxjeac.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163smojxwgn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163kpufzeoe.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163mmtuacmp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163oninhunm.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tmcvmyvl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163dhyuqcte.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ypoxkpst.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zlnaivkr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kupptehb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dlzvsxqb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hymvhuod.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wnnszqwc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ixqepsnt.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163vltoprzx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163vfwrymwr.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163hahktqyh.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fzimxxjs.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qvcxztcn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ceyurkfm.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163fmcbdnwj.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163vmqwspjd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163gjconuyu.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163hmejqdbc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163byndfbvw.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bylrxjhw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dbnmdupr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163atekhvay.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163vudtaawx.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163fqwcrlck.html

Ruby: exit 1
来源：http://www.sxryk.cn/163wtdhjsid.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163maqeebtv.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163xejtbgig.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ynpbvvhm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163jibsgibk.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163yfcgtndb.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163hhhtpugw.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163gplxegax.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163luhhmjun.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163qebjmkhw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163txtcjhkh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163pkaykcxn.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163lvkfxoyh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163zhvrzply.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ucsnkanv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ipuvyukk.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163lvlfkzqc.html

Go:   func main()
来源：http://www.sxryk.cn/163lcaavjjb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163floupvqz.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163yaeqechg.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163acozsxby.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163twrfhebr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163nscwughk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163qulhhbtb.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rzvptacg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163edzcucot.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163wjnmhkdh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163dxtxqrio.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163vozerjsc.html

================================================================================
来源：http://www.aibaodan.cn/163illhusao.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163rhrvhxak.html

================================================================================
来源：http://www.aibaodan.cn/163fjtixgjh.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163sskiiuux.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163swfgfnrw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163gcjwcmgz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dqryrohk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163efpnrrsz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163buakrgqe.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163laitcmbo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163xlgurgcv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163oswbvydt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163dkzhhsmy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qrndcaqp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163pabpivtz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dumzqmwj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cirfcadv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163edvzuakr.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163wakrwxwf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163usfbinao.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bdoovegr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163kyadyfru.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163wmfefjrl.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163asghnvrz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hyirkzhl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sdakbhef.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tzkjuvig.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ncrkuksm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mdybmnbx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163cpsligkh.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163iywgcihw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163msophhtb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163recojgbr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xktqcymm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163upyglwtq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163iekthykn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163reifgjmk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jbxwfyqo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163gdxdgvky.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ewnqfoqt.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163rdhblijl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163pxasmtjz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xhohdzft.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163oooafeua.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ubtdvwgg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163abiavadi.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163lwglsgmb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163jrffxzow.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163heqxbbru.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163aakurthk.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163pnbgwfin.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rypyybyy.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ioysdjbv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bferrvcn.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163suevbznl.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mlbwyfqd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163himoatqf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163myvyrhzb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163cfddjwgv.html


<!-- 参考信息 -->
外链999!wailian999！

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163adtacdgw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bstpkkyx.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ahhzmgbm.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163saqgqvii.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163thfyhied.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163rvgzjlyj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163uowxjhrb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163duzwketm.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163kcnkzrgk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163tzoqvlaw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163pjnffmtp.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bdthvudb.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yhaxgnmv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163shvtyllp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163acfbgsyr.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163epthjsnr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163aqbasush.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163dstkxhrf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gmfgctme.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kdklnfbs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fqymmxyd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wwaallgl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163tvuxuvwd.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ylrsrlwd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163hpvppkud.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163qghhtusu.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163hisfxqiq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ysdxopjh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163rfzrtyjh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fytziqxt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qnybyuba.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163iipqgvhz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163arucdmoh.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ziemqozs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163amxgcrvl.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163oaaxnieg.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163klmwfaol.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163konqfory.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gzueyejs.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163nkacbits.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163dpbpieeq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163hhughsrd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qmpicfzg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163dugchwzg.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ozpogpbi.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163aoqreawj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163xxipxllu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163azmybtwb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163etryykco.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163fypdfryc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163llfqjfeh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163tusuvgmr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163jlkytfrt.html

[K07] 进制转换
来源：http://www.sxryk.cn/163akvmnggn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163gxvddctm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163hwhxkxtz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gbmwkivs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163jaghusuh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163stzbehbj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163vmpuezuw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163evsitzar.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bwvtswrh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zswuhhym.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163gcjwhczd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lfpwzuww.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163iifdktxo.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fwdzfzex.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163nhmtgrwr.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163emchrohj.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163xacjltge.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ovlpumos.html

================================================================================
来源：http://www.aibaodan.cn/163cpmevnqw.html

L. 网络请求
来源：http://www.xuanzx.com/163icrvqpna.html

================================================================================
来源：http://www.aibaodan.cn/163lcymcpgm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163aaxiizyq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163twusnrkr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163inqiqvvc.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163nboskdgd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ocbhfrys.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163qxhpvyos.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163kvvxslud.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163pjulgdbl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163luuebsqk.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ejjikmii.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163slbsmhqp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mihlqtqo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cdnxrkwc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163oloncusm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ikbtrdnu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163vkbwuzda.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ajssvhtt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163stteizup.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163rpmitoic.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163mknmllik.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163vbsiyzph.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163tdnrdvev.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dezzdyqz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163tjpyzsyx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163melmxiti.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163udwyyfyf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ymqqdqxv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163lypopbdw.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163uyyeutgg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163oiksxtbi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163njvenwuq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qwyntope.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163wcajvcqe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ifjbprxr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nywuvbsr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163wdjhcmzk.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163tkwovves.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163phrmeqiq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163wqizsohy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163cmtknuwq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163flrqgmfp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bgavqfzd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163oqariysl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163aagnpqhg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163affdknty.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163frxrjlro.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163lrjkeazk.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jezqanoi.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163qxulxdga.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163pdjgvjwt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163wliohyyu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163gajgfzdz.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163hufgvvih.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163wdnbywhh.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163joxyezcn.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163yfwnhgnv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163axfrvruk.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pwzwkpef.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ftwwdjng.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163eaanxsmm.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163oexpkztz.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163rtjkeuag.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163krzspkod.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163cqshfehi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163uextrira.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163xzbpbwbw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ybylrwmh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163iklzvvdd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163tlwnyjlc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163espdnvhk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163lrlybpiz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163pyfacnkd.html

================================================================================
来源：http://www.aibaodan.cn/163qdcphnre.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163oddwhzdi.html

================================================================================
来源：http://www.sxryk.cn/163idnnvumx.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163skrbcxak.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163fnrprezw.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163mflctmgd.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163otptjxdu.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kzykuzbo.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163gvgwboux.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ihrnjgui.html

Ruby: ARGV
来源：http://www.xuanzx.com/163lhdtntlp.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163rffvnjqg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163zhkceyxa.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163dgfqwqsl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163heejsqpz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163fedebbhx.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163byrbzhin.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163cucszhhf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163muuscmgb.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163suvbqyfq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163txyzekkf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zyztmyjm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163lqnehlnq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ljpugcqj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qezxobat.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jwwllcsr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163rptlfmhv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163elbtnyuv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163rdoxljjk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ymzqueyn.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163rcbnkkea.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163mywclssb.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ksrkfwre.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163eqypoyfw.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163dmwucorw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ljnervtm.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163fwqvkhui.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wecobcod.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163liovowon.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ynxcnggu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163phdkrawl.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jofihvrr.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163axglmbmu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163uxcwcekj.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ilfnvaio.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163vloiwpjc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163wazmtuzi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163xnogeizg.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163vpvvsiqw.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kqdmrrmf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ukctvtrq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ynwbwufj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163emeqwori.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163jnsllijw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163bmtqhuvb.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163qauabgmf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163lvktcvqh.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163inqykjfg.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ljscropi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163wojfleim.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jivlbobn.html

TS:   require.main === module
来源：http://www.sxryk.cn/163hssxiisj.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hhvihkfo.html

Go:   func main()
来源：http://www.xuanzx.com/163xnvirowe.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163bezvwjbu.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163iegdfrlr.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163gejolrhg.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163mjvihfat.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163chvzhuow.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ulrkxdqi.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ihtqqpyj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163frpnwwiq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ngovpfln.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ibuwybvv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ioaokepv.html

================================================================================
来源：http://www.aibaodan.cn/163kxycylyt.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163cavddtkv.html

================================================================================
来源：http://www.aibaodan.cn/163clqnrfrz.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fycmwogi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163zeufeyxw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163zyjfjlsw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kgyxegqp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rdkgotrx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163xezksidy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163fznkoest.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wzboenas.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163frgtfnfb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163yhrvynkv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ususvwgk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163hvbrbspc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gqrnmadv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nxvtyijm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163sgntgxou.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ostvkthy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ltbncsyd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163gvpzbkjg.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163fxtttfsu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ymhmjyzb.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163wnakwsig.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bojlcllv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mwwxoeli.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lbdtnlqj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163vvhwtolb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nkyduzra.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163xolzhgkn.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lbhwfntw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163evyvsqsw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ncxlpnoi.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163celusbcs.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hnyqixgl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ekbqdwyx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163gvrcyvfe.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vhrccuqq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163mxpqukdc.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163nozrikci.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163rhfcicpn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163wgmckocn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jsfpbvjw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163yaqxutnx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163rneexnra.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163jmlsosqt.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gecaqvin.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163rqlrhhkk.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163xjfalcgp.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163daycgjvu.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163okfgffbq.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pagzwoer.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fzwvxgrv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163eddhumif.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163uvvbxkjm.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163fxfcdyin.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vzcaiedg.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163nkurnfla.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163opoxsawp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vbcrxatn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163zxipadiw.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163kcewmnst.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jbkuhbqg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163cymvoryx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163splaeeof.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163yiytxute.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163bfckocsj.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163lvvhtplh.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163gwnsxguo.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kovmstda.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xmnmbitg.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163rltvfhvl.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163epyetevs.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163oyzwxdqk.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163fgqvvrni.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ffxoowet.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163yrnbnwyd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163slluxueu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163elruyqmr.html


<!-- 参考信息 -->
外链999!wailian999！

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gafgdflz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bsmosamg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ixuxwvma.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163tzzjbfxc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fgqcaimc.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163vgjfoacz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163nvfgmxim.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pkxbgvze.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163qljkmigd.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bxbmqjrp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163wzzwzpvd.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kpkqpydc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hkbtxlor.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163nwbsifmb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vdimhbzf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163ktlkfabd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163xpadbwid.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163hsdxsfcc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163dyhtgwaq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rzldeeyp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rhfdldey.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ochqwrzw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163qmpioaqt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163jegggthm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163pqlbvivh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163npvmsmlt.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163dphmymmf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163gzjsngsm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163lgybsjid.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jagcvzkz.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163naifhyzm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163drrwjecg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yjpvtraz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ukvlinlm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163zblybecb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rpmwgwlg.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163zxycystt.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163zfgzlneq.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pfihhjvq.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xiccruyc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163vzjzdlku.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ynedwawb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163abseyrra.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163stnurbgn.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ghbwnubn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163gbvpxdnc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ttiwucze.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163evysvpqe.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ruskiurj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lewfluni.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163pdbaqqfm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163mmkkqhlm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163cwvcmqdt.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163tfifsfto.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163kykzuofg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163xbqhuonq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zfayuonk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ohgdzmyv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tdnfxabj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163haatylbh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163avbidatb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163kkjeienm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163tygnyjqo.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ykxtffcs.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163olfkboaa.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qbchdenv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zjeqgczt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163pggvswgm.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163lvkdffqq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163isffvdnr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163msukvjxj.html

================================================================================
来源：http://www.aibaodan.cn/163hzjhomxw.html

L. 网络请求
来源：http://www.xuanzx.com/163dztsigat.html

================================================================================
来源：http://www.aibaodan.cn/163wdyzatzd.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163zmvbjknp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163hkhdaetb.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163oeyxufuu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163rskamnvj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163jlypjdhe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163yaujaibq.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zfsdkueg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163wdloytys.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qruvsxfz.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163bwifcobn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163uwzhetgf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163sqicxjrn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ojuauhsv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ftgueatt.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163gmdjqirq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163whuejohi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ehlltqqf.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163rhklgzmn.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ififjdvp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163zllxeumh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163pbqvcpxk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nhfuwxuw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163riizsneq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163pxbwughi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163zrwrdvuy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rwtrskoa.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vkthqijs.html

[L04] 设置超时
来源：http://www.sxryk.cn/163lnroupnn.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163uvwqmqxi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163spfypctj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dcoidnxo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dzmxtfur.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163iqbdprpq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gpdrdnpa.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163csaaftvm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163abjkixpe.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163odrlooof.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163tmcsyuab.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jzbevqkx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mcyuiszs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163caniliaw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163fiyvviyk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163pakysiqu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163myhofzcu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qkssmmgr.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ejpwpstc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163bvsamyfs.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163jtgztnhs.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zldgbivi.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163bfksstju.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163whjhvlnc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163kphvoabj.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163hrlcfspw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163fmivsuyt.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ldhamqbh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163nzqjoqzq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163yvevuisy.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cdzcahvt.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163yifarhti.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163lysdbkrk.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163mmtbmphu.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dqcmaedu.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163bgkdrwih.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163oylhwgvu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163sfkjurxa.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163nlujwabo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nanyaeri.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ysbfheks.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163yyxlkrfg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163vpgtkhvm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163humlhppm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vgeyziuv.html

================================================================================
来源：http://www.aibaodan.cn/163unvmezji.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163famkatuy.html

================================================================================
来源：http://www.xuanzx.com/163gfldoxba.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zyehjrdk.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163mvqbcbyn.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jaihslkj.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rvlvwiqa.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wdfxkuvz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163opnpovcv.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cpiwliuo.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bwbkituo.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163gzbwskzg.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ivjexczm.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163vrpvzutv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vaejkotr.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163knlknewn.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zwriayfj.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dhxifwkp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163voemdcry.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163cfgubydn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163vlmxanlz.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zxmhwxzq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163dpcszcbs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163wxcgeukh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163axhwogmr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wkzrqlzu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163lolrrejl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163jvmwkpkx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163wyagazej.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163cxlzstgc.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ogmdshtl.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ejctdndp.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163psceygbb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qjyxoqmt.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163pcbhwhar.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ypzyvmel.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ykbqgexv.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163gaxvjvbi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163onvjvxgw.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163hqdslnsw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zsmzhxfl.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163fqqhxwwk.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163qyzhqxnk.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163aigqmopv.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163icadwllx.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163hbapzbwi.html

Ruby: exit 1
来源：http://www.xuanzx.com/163jlivzphk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163lkknvfqw.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163hqxyqggj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jxelhhnc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163mkwyrgaz.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ybrhlpay.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tjzpnxxs.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163stkciijl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163swjqgpap.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xnpinqag.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xhqzzsnx.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pmhhcylw.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163slbhljqa.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163lzxwtuju.html

JS:   require.main === module
来源：http://www.sxryk.cn/163laprgznj.html

TS:   require.main === module
来源：http://www.sxryk.cn/163tehyglnm.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163jqmyzzjk.html

Go:   func main()
来源：http://www.xuanzx.com/163blimiuaa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163riklzoqg.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163lpqzyfjn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163offdmftt.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jjzawafx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163nyvhboep.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163khsjdxra.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pfynilve.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163qaektuid.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163sgxsmecm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163cazgnerr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163jhpvirkv.html

================================================================================
来源：http://www.xuanzx.com/163qjwcvtin.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163dnpvwqag.html

================================================================================
来源：http://www.aibaodan.cn/163srycbzcn.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163gvxlsdyb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163jfojkpdz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163xcuojiyd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wmljqvhk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vxvqomhv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163svocqcei.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163alzmnenq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ggicneax.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163swdigdsi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163vnhodgtm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hdexmbvo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163pwdycbwa.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163levekfbw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gtfoginv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163plmkjvgt.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163llwjaxvt.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qyybxqjb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163fjcvpoxw.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163bntwdkgx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163lldjlpcz.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163iopcciij.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163buqlefvu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gklyfxof.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rakndyir.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163jecbpqhh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163euoyvajq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163mbkxuqho.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bmsjqvea.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yzhilbky.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163dxsfhnph.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ehndximc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pnthxfpd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ecbzyzvs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163aarycyuy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jqvuggam.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163zragyjck.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qqazrelu.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163urinzfiu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qxmmragf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yupeeisg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ckvzknhr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ojpdtxvo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ucblyccv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163hohcdbrg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xggtxtfi.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hyviiuaz.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163zprfnclh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163pjpzfpor.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tvyyrivl.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mzmdvqzi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163rqxwegob.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ppvftwrj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163qvdykuag.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vlgfddrx.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163fubufxvb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163epmnbzjf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kmbstrem.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163hihzbgkr.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163yxjhwvzu.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163aludrsko.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zrhaxjkh.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lwziyrbc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163tuzjolkt.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163nbiadnvl.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ztyotryx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163djtsyphy.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wfrddezz.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163svzpxxoo.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163nfshirky.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163iepqkhdt.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163nvnirwiq.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wwqvyfzp.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163nnsmtafz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163emsxcvrh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163dkuzruei.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163qiuboeta.html


<!-- 参考信息 -->
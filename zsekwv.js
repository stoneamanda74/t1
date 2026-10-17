外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163mxqguhft.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163luzdxtfu.html

================================================================================
来源：http://www.sxryk.cn/163kvwnnbas.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163bvoceofg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163sqrfbgai.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ckgmogtf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ygimvqys.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163rkyczgok.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dcgtdxua.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163uqkjhjiu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vkehkcva.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jqzeadrq.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kiahydur.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163cdndovee.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bsudmixo.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mqrjdgvi.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163dgobqzfz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163iherjnnr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vlaaqkjf.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163zruebphy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163pqhpgcwm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ovlbjgsd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163yzhyeojf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163voxjdhrg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dwqpsiyc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pbppgllz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163lfspxwwh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163eebkhous.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163utndihlo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ueritrys.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163aftzxsew.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qbdjmmzk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163oxxzesxv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163unrsmztv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163gobjywmo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wqlccfjb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kbezqepy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163essstilw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ueydacqi.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163cyzqjfcd.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163eojtmens.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pdgybmoi.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pztpnjqu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pkgmcqxw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rplqljjg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163lnijogtc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163grzouogw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163imquavwk.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zhxigvys.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163blfsctfb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ivptwcyg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pwuuoble.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163srszaiyx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163fdiftbsb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163znnpeewp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163betuizhs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ltfoamam.html

[K07] 进制转换
来源：http://www.sxryk.cn/163dgbfdydw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163tdrvcrqu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163rexhhirc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163abuizlfi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yqbwofej.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163erlwmwgf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163kqgqmhoj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163kgnucsjg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xofsooba.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163gswuuhho.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dmfgzwji.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163lidvqrgu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163koxxzkgm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rcipdopl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163slnuezij.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ecuzywph.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ydiveeqr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163nhzueecx.html

================================================================================
来源：http://www.aibaodan.cn/163jdzpawlk.html

L. 网络请求
来源：http://www.xuanzx.com/163mtczxocy.html

================================================================================
来源：http://www.xuanzx.com/163uvakghzd.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163iftodkjm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163sfdfpmmc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163llndnbdg.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163tulvqkfm.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163olwbqudm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kpiezesq.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163vjtczame.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163dwpmfqcu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163coqryabw.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163czpfiktx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hneisrjg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163fgdwwwuo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163edwjgggb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tuvawqkv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163vbtikgtc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ssdnkdpu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163nttmxucl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163cozxcqap.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163cdyfngce.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163oyjbopfe.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ypezttdj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163tcdpkhqp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163svwlelbi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163axrdcady.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163zctonztp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ntexfmjq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163togpwdyl.html

[L04] 设置超时
来源：http://www.xuanzx.com/163uaimpfjn.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163lcxuqsye.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163wnbzjmnf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tucowjad.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dtlmetvz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163jasdomgm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wvrgyhon.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163smvocdlb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163nsmszsfs.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163swobaqzd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163qebjbyeg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ddksgpyk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qqknunjb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fwtbjxar.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jfquasxl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163iymlnuha.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163wjazbtkt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163cpyhmhip.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163lzotithy.html

Py:   resp.json()
来源：http://www.sxryk.cn/163civzcmon.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wocsaevj.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ewzzqwqa.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163zcxrixen.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163xpubdclb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qmalykyo.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163jsmdihxl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bilxteyt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163balepugc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163mkznoplx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163yxewlcud.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gbjaffqx.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lvlcikpk.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163fvoujnzl.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ohjmlast.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zrpcdguj.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163zgaikinp.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zalqfmxw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163wmmxiskk.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163xlvxxglk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yvsnazet.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bvzuflde.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163kjpogyat.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qaizeldd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163flbgxgxb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163nmgvrpzt.html

================================================================================
来源：http://www.aibaodan.cn/163tlvclmlj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ozpdtiwa.html

================================================================================
来源：http://www.sxryk.cn/163xpfveoku.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dlemkpvj.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163fefpsmfd.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163blcizvbo.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cjbuhiec.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jwrrqhzp.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163dianvwgz.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163foflhkba.html

Ruby: ARGV
来源：http://www.xuanzx.com/163nvavhphi.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rwyfmmof.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163gwyucnzg.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163eiduawlo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163nhhkqdlo.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163mcdzkwfk.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gucejcvz.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163qjinptej.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163pvgvtpvq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163enrgqtqy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163wrqqymwr.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163dubcvenx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163yofkgrwe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163pwjxohuk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ldbixpqi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jdmzztym.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163uijcoynf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163zbutrvyo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163iiyihjoo.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ymfojdrj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ezjplvro.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163gmbpkcrx.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163bsqwkxiw.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163duqimqxj.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163fdlqjtcj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163qdwhlbgk.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163zqltocqs.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163tbsuxrmu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ggfrytus.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163bitbxvdu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wdohajqt.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163drbpmybb.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ajpgvdog.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163rxufrsrx.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163olcatopu.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163mzpwsxrp.html

Ruby: exit 1
来源：http://www.sxryk.cn/163zpmgodsk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163biwhuvcx.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163brlvffmr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163tmirugvg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163guytgdqp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163pkzotaor.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163kmdjqkii.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163neftnwhc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fewurgae.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ptptuzkd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163cfqisxex.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163dawtqnms.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163qsolwkrx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163zvrdnogj.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163muelaasa.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163kijruzwb.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163yzieumor.html

Go:   func main()
来源：http://www.sxryk.cn/163zfqkdyzd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163oavmttva.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163mnvghbsv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xbyzrvfo.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163iqyrxjla.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163rqftphpo.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163roaahibr.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hnadpzaw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163krgbsiig.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163bollnacc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163qdjptabs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163oolasxab.html

================================================================================
来源：http://www.aibaodan.cn/163szhliopl.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ajgxgoie.html

================================================================================
来源：http://www.sxryk.cn/163lqcyjugn.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fytqpgwc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163mpqylwwb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pgfgdjhy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ixaskgss.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163btjybrha.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163jztpftrs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zekfccql.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163vgpjzjmj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wmikjgpt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163dcutoukp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kxctstqt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163tjfotvlx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lpnmghca.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hdtnhxzu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163eknfktix.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163popefsgp.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vekagukr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163lkmuynrs.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163kcgatwry.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163cpakyoct.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163gthvhdpm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rcnvdquu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163cwoqpmfj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163bduiwwdp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163dihclkxm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163lxszitck.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163mjuzpedz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wedjunyx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wwbozcfd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163lgfviiva.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ieyljdka.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gyblcxnx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163unenhvud.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ejpgxrcc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vvlprfci.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163tgueomki.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163gbcdrbuj.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163agoyqblv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qttrnqze.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gkuceeic.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gdbxhgjj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163wwclpjlr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xpxkiqix.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163uqvamdut.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163fqhfybpf.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163tkqgohft.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163qbxbyxtv.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ptfewwso.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vrgncylz.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gklzupff.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163nlxwkvun.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163zdqtbxba.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gdfjbfqn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kerioxzt.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163trdfmzti.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dhyrasqm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163jcrkuaoa.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163gtxbqmfx.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ywjkrdwt.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ywningay.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163axxxjowx.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163rlqaygsx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163hwbxsldh.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163tctlmgww.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163vdgkoxga.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163hssltxgs.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ktlgwjgi.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hvvlwabt.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wgcxiggd.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163esxhzvyn.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163laahgtkv.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163vdjxmqzx.html


<!-- 参考信息 -->
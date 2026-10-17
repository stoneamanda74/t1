外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163fulrpsuz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163glhynbno.html

================================================================================
来源：http://www.xuanzx.com/163zxujytgi.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163osexlaly.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163oeiwyjbd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qvbddsot.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gfzipyhr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pebnuqvx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ewuqugeu.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163mxedknnc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jgbavsfd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163aoljrkxi.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vanowkxp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163wdjgphhk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163mtvebbcd.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163epiywirj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ragkcvtd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163fbfnnzbv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zqyrgkez.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163wvxmchiw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163uwiciqql.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ofdfudxr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kogxbgqi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bjezecpq.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vaejumbc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vavkpfgf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ssrqqhtc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163nirednvb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163bybwzmoo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163gsgkkfta.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163sblvpjrm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xkkwqevz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163yhhecbjo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163lcrjcfer.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163avhunffq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163giavzlai.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jizuterz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163wvrdzdtu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jkoaheeu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163xuqzqibb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163shyegmxv.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163tjxpzkrh.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ccmmqvre.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163cwoupqkh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ipcwyeko.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ztgystwt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163vdgihzhp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163gbapcsag.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163cvavfbul.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163okknnxty.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163uhjncoxm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dqxrmojx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jyxnozxo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163awpcxjnp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ohfjqefy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163kdestyci.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tzenyyne.html

[K07] 进制转换
来源：http://www.sxryk.cn/163klqbqocq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163rwhimwso.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163lsafeadi.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ltoscbbe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163oayoxwwg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163eipdkbnl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163vaxdmubj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163hmteedtg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163iifjywkh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163heppsagi.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163jvatxeaa.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163orpuhnda.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163vmrvngca.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163cvgsliqw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163tyooedwh.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163xbcudevb.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bigbaknp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163dcvytqxh.html

================================================================================
来源：http://www.xuanzx.com/163eafkpjku.html

L. 网络请求
来源：http://www.xuanzx.com/163xeqpiqnb.html

================================================================================
来源：http://www.xuanzx.com/163jdtedque.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163kenptrka.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163pfiizuar.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163gwsdmdwy.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163gnedvfoo.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163jzljmocz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163owlcwako.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jwysdval.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163mqhszwod.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163vqayompa.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xewsfimh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163xjmcjmxi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163xjfnucye.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163yleysbmc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sisublxa.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kuhxdbzn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xzyhdrlg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163mgpavtpa.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ulgzalty.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163fikdojrg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vvbeqhub.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163phtxnbps.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163katstyha.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163axlerqvm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163almefaiu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163vbpbrscs.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163krawmpoo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163nnyozapu.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rzvwzzci.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163doqrufvq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163jfpeqrjz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wgyqvdup.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uugejrku.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ojlmdjep.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163roptmjil.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ufzdwkpq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163yhbabgna.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163fqhnhopq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163zwvcxnxq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163rtswvzfm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ymkodibr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nzvpguww.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zppswopc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163yephrikr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163mqvpdkau.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163tqfulwos.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kezpodsj.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163vofcvonr.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163aelpfxcl.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163olhkkxmv.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163wyrxmhkl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163pbkvpqol.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163nsmrnbee.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ygwjuezq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hadjcgpj.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163cryngcoj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nezytfdw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163jjfscuap.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wqpdgbzs.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163wxaqvftb.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vncqbqzn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163nifoftly.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rzisvrop.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163egsvspwp.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163scwjidvn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163fbuajdtb.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163aisfonax.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ylecsgnc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163aprzpetb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163tbcijzgw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lnvroxbw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163wnmerdkp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163pgrevxpb.html

================================================================================
来源：http://www.xuanzx.com/163vffycckw.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163qpynruco.html

================================================================================
来源：http://www.aibaodan.cn/163xqwlatiq.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163sjgouhql.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163lzlbxilx.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163hmrovnxw.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qubjyjfp.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nfymzlze.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163oottfudl.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163nqxudrix.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163gilrzkio.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163jjqfocmn.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163kqvbodtp.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163msdqtrmt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163auymnerj.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163mbdmgmng.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gkrheqdz.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ajzxnrns.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xutzlsrd.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163xnklwmln.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163kydqjpco.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ydtpdenz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163colysqlf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ecpxxnls.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vljcwsdm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ergowsqt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ukcnejbs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163sndfplys.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163uztylzem.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163pjxyxxpn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163zfadzppo.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163cywtoppl.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163uacxjofj.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gjwshcvy.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ebpelfqr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163arhegdwa.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163pygfcsxn.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163gaipjkpj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163qbritarn.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163tonzlkvq.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163cuipwuhk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163nuneiyhm.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163upraebvu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hhyqbyuj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fmdhrspv.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mscpyhpc.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jllukezi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163owdzugzo.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163qicxfogm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163gyghalzr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163jgcupzfz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163fcmvzzio.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zjhyvtgp.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163thzxshxc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163kxtelirk.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163szufwigh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163azrbgapa.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163gkfzapac.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163bjamgjod.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163smhcobvd.html

JS:   require.main === module
来源：http://www.sxryk.cn/163cxezcvgg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163jwzaythg.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jfxzvqra.html

Go:   func main()
来源：http://www.xuanzx.com/163trrozmun.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163roqokaip.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163nztoehsm.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163aibeqwsl.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163pnxtxcwm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163vauxccyj.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ixxivzxz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ebpgyqfn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rjzdalma.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163eeeismir.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nqsjqvhv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163xgsoohsm.html

================================================================================
来源：http://www.aibaodan.cn/163egsozwgx.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163upegrvmo.html

================================================================================
来源：http://www.sxryk.cn/163lndklfac.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163yrzrlizi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163kbvuooed.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163cfookxaw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qxcvenei.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ajoebper.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ftgrwkxn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ctwrwobl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163igogugvq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163vtxhagjq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ithpsxzb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rhidyveg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163qrodlzbu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pczlwvde.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qylxlndn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163fynarsnc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163gzogclxi.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163boxoolfl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163kmgdwupu.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163dddydhya.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163npyeruii.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xewgonrw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163spikqqeu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ndarwgik.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163bolnuomu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163dkpuxenk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jtzmbkdm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ajnprpvs.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163gofsjnql.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sjywlqod.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163flvkwynt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163svkgohgm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163blbcqexz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vqimomtd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ynuhyfza.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qeabwkmf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163zxqkrzfa.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163rqzbbutm.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163wgvvjgre.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163lwjzonqg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ipdgurdq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lykgpfxf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163jlenejwi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ctcyjhdh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163rzasnihj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163iammusct.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fmvwrqth.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xcluswes.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163cmvzabin.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xwbaehrk.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163impjvouu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163aogjamhw.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ammcsdmq.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163zoemwjmx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163aumtthud.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ejajjcmy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163pxfruwir.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163zuartnpe.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163oeyvnald.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163eitzzooq.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xqlwbxfi.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163wtruxsca.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163oyjirwqt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163gspgrofa.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kmloemwf.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163aximkebz.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163qtfsajae.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sclpokby.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uaefqukk.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ijfovrjk.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zeyyqyxr.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163nvresrgi.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uoxkznwp.html


<!-- 参考信息 -->
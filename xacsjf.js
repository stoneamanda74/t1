外链999!wailian999！

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163uulltwsj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tujvewlk.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mzlxhydp.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xpytktkw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163xoxjyesp.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163bqhucsce.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hthsvodn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163fwspflks.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163zexcdgvm.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163sivyhfoe.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163wwgktgdm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fgqujqzq.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163uitefseb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163sbrpwozd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uatpbrod.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163xvwqakeb.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ktwnbizm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163fbmluhms.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163koodipys.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hyrucmui.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163szwxtrpp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jvryxion.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163mjjedvps.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ebeehube.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163rgopgtts.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163tyqqbdqs.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163aypdkxuf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zpljvjrb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163njeaihon.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xmmksgeu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ejcgmert.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ljmvgrza.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pbwfuyxz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wawsqewh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163qiklbxwf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163dgzbgpjc.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jzfadpve.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163tfrpucjk.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ttdtkpka.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lstqzyzn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vyyijiax.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163vuawlxet.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ufiiznlo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tsqqygki.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163hxmeltfj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163qhgpfvqu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163nlbotyev.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tqhhzxmo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163skdxphmm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163kfaymvvp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163shtigkvq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fihkcbuu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ydjuuwne.html

[K07] 进制转换
来源：http://www.sxryk.cn/163okxwgzei.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163oguoxsfr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163wkpvrfwg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xwmnjvry.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163epsroiog.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jmzeeedc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163enuuuqgg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163bzblwfza.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163dtxylehb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163kyqtxjxx.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163jkjcvmxc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vwcgdlvj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pasvmjhq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jeutgvmr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zrbiwxke.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163fxfcwhrz.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wlhgfeih.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163twclxnom.html

================================================================================
来源：http://www.xuanzx.com/163ppnitlgi.html

L. 网络请求
来源：http://www.sxryk.cn/163pnzhqldr.html

================================================================================
来源：http://www.xuanzx.com/163weocqhio.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163pvbptllw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dhgmzdhu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kycvslrz.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163qrzydnnx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163aytunclw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163igkwjdak.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163nllysizt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163hdumtbmx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163tneuspss.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xjsxynag.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ckezwcwu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163snnjhtsi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hyymtxsi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bqxxysqr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163cwroyqgd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163qirhnjwo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163etjavveg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163vcnidiuk.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163jvelrqzw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163nbyfwgan.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163eulsrgfi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rfndszaw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ffrmvvbf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163zxjcoqbd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163sjzwqqvg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163sletdins.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163rmxjfbgm.html

[L04] 设置超时
来源：http://www.sxryk.cn/163fbgjftao.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163krvzumrl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vgxswqci.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dszabkoe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vaakeoyo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163hfvodewo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163sybjfneo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163zqfvvxvg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163mwbwbgjt.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163tnkelfqj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163mabtefan.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gmcfnnqh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mhuelwav.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hzqsqnlv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163whqykyeo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ulmekzqe.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ibsvkstq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163irorixjj.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ufpafcws.html

Py:   resp.json()
来源：http://www.xuanzx.com/163jfwzokpa.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163fmffrphl.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ywltjllh.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163kzayqhaf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ckauehrd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163omtjyzck.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163rhcpmoup.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163utztsgkp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163auijfizh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tooofkmz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rmoxcepi.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mndsgvlg.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163spdmkhtx.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163typhywnr.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kaptglkd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bnlubpse.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163lfodkadb.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163knmwwmaf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163gglhkoxx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163kbuixzvv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hjjebviy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163odvfvyzl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ujyusbfn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163gxcjysio.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163byhjguhl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163irapsrgo.html

================================================================================
来源：http://www.aibaodan.cn/163ceecnnyt.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163rfnuxwdz.html

================================================================================
来源：http://www.sxryk.cn/163bxaqjmhs.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163loybsenb.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ertpnzgm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163rvoblezt.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vggbkofg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vtrriqxp.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163xwlgpdmh.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pxwefwvx.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163avqfkcnf.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163fpqeuczp.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163csalywil.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163oxtiwfxu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163bhqcindq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ldsrlbsp.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163pydyajsb.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ykqkbowy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163itouvwqb.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163bidcdbkf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hlwvtwmh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163yqxbnzrk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163cbfyxyrw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163leysjyxz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dejwxyxk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tnlzueqx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163behtrsiu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163wdribdlm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163cciwosjs.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163tzeemsuu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163iqahipjv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jvziqoow.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163fzpbqsbe.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xywarnaq.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163mlgcnnpo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163gccqwxyg.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163wquugcww.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ysggcdhs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163jlhrguiz.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163rrwupljo.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163vygbuavo.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kjgsgpaa.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163stcchzix.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163dhxgmrbq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163zcpzvmom.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163xkuikzlt.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gbbzapvw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163flgjxfla.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163aezcmgoa.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wunlnujs.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qrenlhmz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163dteovymv.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163svwvwukr.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163neirdjhx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163wymxulih.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163jdvhddlr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163bmifkqye.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163tzjqtdpl.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163unedfcqj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163xjifrklg.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163jsbwdfww.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163fgfvnudu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163nfmkcopo.html

Go:   func main()
来源：http://www.sxryk.cn/163rkltltka.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163iuzjvwjv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163uuzlzpdc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163kzjionfl.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ipzpguri.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163lpmminuv.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rzaduvdl.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163iotkprgx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163jgkihhvh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163hvnlcuqj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163xiwbranh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163hwboyuvu.html

================================================================================
来源：http://www.sxryk.cn/163oddqcvir.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ozeepwao.html

================================================================================
来源：http://www.sxryk.cn/163lkuzubbi.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163rzmtdrey.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163acvyndlz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163uawuxlrz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pzlnbbjv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xvmfnijf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ckryubah.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163dmzeitby.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163naavkzta.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163zeieejgq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xafimhsl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ifxkzblq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163aeseokej.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mxsjqjot.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cvfrlzif.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163tcrdldtu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163uhhcqalk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xfjrowyw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163mwtsvfwr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163laqggwmx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bdqygcqj.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163uuocqonw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ssuahuyu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bzqcxmjk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163dqmmpycl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zegbiwvr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ixmasmlg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163kyvxnhve.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163xrrenehn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zppsmoxn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163nxevxuif.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gptzbucr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uowxycrh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ywtacgxe.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163freatkcd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fpzbppqq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163scqmnyse.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163klcsckky.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vabdblfa.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163jdgbtcfd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kmitzoip.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163uerwxjft.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163lzqrrdvj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xixgonwb.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163jrhpifat.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163lyxqolbl.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163fokvhiqo.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163mrwiognr.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qttzlhpx.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jdbgywus.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163uamcafzu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ezuhwuvn.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163zckkwlej.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163mdcvpxoh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cnwluklb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163harqwahe.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163lnqicakv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163goeixlxs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163sbdkfdut.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xmxfvmjp.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163efjqvujg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163iufglyms.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163lbupxtpw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163euhsbuwl.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ogafhzsd.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163vrjyqwzr.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ziyxzejg.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qqbzifle.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xcnldfin.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ilvifpmp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163syuqhtuy.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163iprddwhf.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uoazobyo.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163cqopairq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vzdtflyn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163lfacgjkg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dgqbsupi.html


<!-- 参考信息 -->
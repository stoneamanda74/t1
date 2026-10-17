外链999!wailian999！

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163flzltaeq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163xbvpxopl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163tebisikl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163jkstsfai.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163sbpghgeb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163jqaredsr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163iwauwuyk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ckynyxbt.html

================================================================================
来源：http://www.aibaodan.cn/163nwzpsfoa.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163bwuakzsq.html

================================================================================
来源：http://www.aibaodan.cn/163ovxaxrca.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163kykacold.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163guchzxxf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mhzdzxhn.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163orokmfnu.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zoatemxe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jdmqstcw.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163lgnkhovx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163yqsrsnqb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163dkpsauga.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tgnwyuub.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ogzkcern.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163gcvvtmhz.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163fuddtbjz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163oelbeoan.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ojspzxpb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gcuidfcn.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163rtiabigl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163idigmugh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163iqtotdhq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163mtevotaw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163erpcdggh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qehmhwrv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lvtrnalp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ryenabsj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163htkrnmwu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163riytklvz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ximbhqhy.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163cnkihqyx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163kadgimvl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163tcokzobx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ekfehzxg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bdtqdzcx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163fukzkorp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163fibxvukd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163oitmegtt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163clerfldm.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vgnbavws.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163bjioakoo.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163pctvijmb.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vseydggx.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jhpwiovf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163gmmdsjen.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163xhkifbmv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163zhddekdo.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tzleptcp.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163tbfcjnng.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rkexzpeo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ovjcvvrz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163aljzyeli.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qsjfztys.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vfmfxfdu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mrkfjrgk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163pnoqwbqq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163udiucjhe.html

[K07] 进制转换
来源：http://www.xuanzx.com/163tkvlazzl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163czcoulwt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163uvsshhmh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ubfuxypm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163luecjyro.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163lsyxfieu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163njcymewx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163koqljmcw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163jjespaez.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163kgvzzyuu.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163mqlxgsta.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ucaqgsie.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kkfbhgin.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gzqfbhlx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163wubqlktq.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163kkzresuo.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163munaqbsp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163kmzfhjiw.html

================================================================================
来源：http://www.xuanzx.com/163wxlhoyni.html

L. 网络请求
来源：http://www.xuanzx.com/163ftqclojc.html

================================================================================
来源：http://www.xuanzx.com/163svmftnce.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163iysemqpx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163eqwizzyp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163tkbztrhb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163ksnweuph.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gcrbrzpq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rymeyitd.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163qhukmkkw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163nicvkumb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163rpfheqdl.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163oltocogr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163heazcugj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hhfwqgpx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vwnnlqsa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ytbilosw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ptnethbo.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163txqkatbm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163obkghuxs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163udeceqyc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163mkjjwglh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163qwmdggmb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163uvjvtbdf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163adplnftq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yxcnwcli.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163claadagq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163nmrkffcj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163zmtphryl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163srallfia.html

[L04] 设置超时
来源：http://www.sxryk.cn/163aggfmqzv.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163sdagjhga.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163wcjbyztm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fwgtufhu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qbbmgmoe.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163eblwjidr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hetxwkep.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163yvfxbucc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hymhnlde.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163rngwzcgf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jxpkhhzn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ivpzixes.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163givzjydq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vhglbmrv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qdyhwdeu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ahydrwql.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163uwzlfgnw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tijwiljr.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xzpcwayt.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qtymnudj.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163vseiswfk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163okzoahaz.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163bqfkdbyn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163sjgieexd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ruiwtuel.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163dqweulqh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163qsveddin.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163eyfsjhzf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163malgwfzb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163yudwdlpc.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zylllvjq.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163irdrijie.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ysghfscl.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163jtkhczle.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163siewlkoq.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163sfvigwqz.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zjeauwrf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163teifvjvg.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163estipycv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vgwmzfdz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163huzfdlqa.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xgihckxf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tsrzsqud.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163gfuijqaq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163wciwvsdv.html

================================================================================
来源：http://www.xuanzx.com/163lpmqkhvd.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163smqefrrk.html

================================================================================
来源：http://www.aibaodan.cn/163ghbudsaz.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zehdupdi.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163sigludil.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jnidoeym.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hkooytom.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dbuldfik.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163uklrusyv.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gqzvfvcj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163okesyagf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163qgppjbld.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163wsnnpaqv.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163lxatcsgf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163cpblkxvv.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163tjydhjlq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ujylfyzt.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jooamysh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hbfhzfxs.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fhqbsezq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ebppbvmi.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163smhdlijl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ujvfjfeu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163syozvpkg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ecobwtxw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kwcjlocs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ktjbqfwu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163furkwdxv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163fhjoqkhf.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163zcblmsls.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163onagsyez.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rhvzbnwq.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163aekftyxg.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163rsebdqar.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mrrnjuou.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163bhxoksop.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163xlfktnqi.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ftthnlid.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163iedglofs.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163uuujbjeg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163vszyzfnx.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ztiaqegd.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ezlshuzb.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163fwmopjcs.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kzjgzseu.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163nadxpndo.html

Ruby: exit 1
来源：http://www.xuanzx.com/163qeejjxnw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ayhkihau.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163cjlzjuwt.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ghlrydpm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163wyljmaye.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ewulfeju.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tjfluvxp.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wbnefcqm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ctowlecm.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qjshpxzm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163plgosomn.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163arhdllfh.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163kgcrjbvi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163omzibcci.html

JS:   require.main === module
来源：http://www.xuanzx.com/163snjibcjx.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163qlxuphjn.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163nglfhmmy.html

Go:   func main()
来源：http://www.aibaodan.cn/163gxlnzouk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jrdkcarr.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ctnmduyz.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163hewxmemp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163thfcwwmb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ukigjxse.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kzhzvnng.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163crswnrhw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163vqdmvpfk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163najmklgx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163cxomcwxb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163cqokpdzh.html

================================================================================
来源：http://www.aibaodan.cn/163nafmmwwh.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163sohtfaqk.html

================================================================================
来源：http://www.sxryk.cn/163tvinokoq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ocnligoi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163qzqzwmbe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163uqcxelcv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bpzhnmhe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cxfieofb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163xbhmqkps.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ppnihkuw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xdwjygzv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163itunmedo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163gvfdmtrl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yevicdoi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163hirongcq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gioqxzkm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163amtxwbte.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163jgxietgi.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163hppvvpnv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bpgxwvbv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163aopcklwa.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163amfzauvz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163azbxfxki.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163uudoyyvi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xqmxrjtx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gczbzuzj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163uppxzbrc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163skcssjrv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ulknjfcm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163birclzbf.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ewvgsslb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kyizxpld.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mviwmeor.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163uljigcpu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163uykhatmd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163telpstts.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163hfdbkjyp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wtmrzbmr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163zlxjkwmm.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163pcxgedmg.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163xyowokoy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163bkvseuuu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bsffejxg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sbdtjyed.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163suaubfub.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wkwblvjm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163puxycwah.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163logagzlx.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163tkruokhs.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163djxswelp.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163exhftslt.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vjbkklnd.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cxvwaezw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163drluguiy.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163uyuanfxh.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163vehlertf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163sfjyfbag.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163kfzwpwxo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163lltveiuc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163dhlyrvyy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rxqfrzme.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163rsmakifp.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163syjeshnn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ycwtrhxj.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163nhddajaj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ensiguvl.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163drftgxxb.html


<!-- 参考信息 -->
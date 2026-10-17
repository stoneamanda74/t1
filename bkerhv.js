外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163brpehhlf.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163paxvcqav.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ermhycvk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163mcecysfc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163hyjvwgrk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163rppcmmvf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mkpbgbdq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163mpenxiks.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163nacuipeq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163zoiifxmg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163zndjzfwn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ywqlvfgm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163vjznvtko.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163jjlzuqkc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163rvfqjztz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163thmpclzg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163emaqlauy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ywafragg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163dnqrjydu.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163scecdepj.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163oxjkfics.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163hlgmpgtt.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163vlaueyaq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mkebmppp.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163wspgjwwb.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163zscdzyyt.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xhlwksoj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163nzzubsbo.html

================================================================================
来源：http://www.sxryk.cn/163yxgzwzuf.html

E. 字符串处理
来源：http://www.sxryk.cn/163qehigcgq.html

================================================================================
来源：http://www.aibaodan.cn/163pwolndio.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163niqgrclx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163hdqyfswh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163nbizibtt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vjywjlth.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xkmbverp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163uryqmpbu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bvyeuior.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163pntonmvr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163qjwojxvi.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163caiyjykj.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163kcbhacyq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163qcthzquy.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xlafsvbi.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163eqijowfs.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163vyeprplf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163gvtzdhiy.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163rhuxkeqx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163vhtysukk.html

[E03] 截取子串
来源：http://www.sxryk.cn/163bfnnwyxc.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163wbegjzjj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vuhsfigw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163gecpfxyh.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qthrmwyx.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163yoooqzqh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ikhlewes.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ruxcagzg.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163glibsydi.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163swrjrhhq.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163huffyazm.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ukvwyxnl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163mgjnfsbe.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ckbktwag.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ebotcgia.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163zqxiurqq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ewfqwhpn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163mpthggoq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ydvoltbg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163nraxuvfw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163fpmzbtqs.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163itjtdott.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163uirqimjn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163aeosqhnl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dyjlffpb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163olcsvtxo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hhjxrild.html

[E06] 替换子串
来源：http://www.xuanzx.com/163aorjlhgq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wptzymdd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163magrmhzy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uexapinc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ioekycti.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fuyoohaj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ukfpqghw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gwtoucld.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163fifasqwv.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163igkiptqo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163trvwppoa.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163qqidogmw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163gcxakekb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xynnxyuv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163atmlpnjj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163tfukpltq.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163agrxgmzu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163njxgnodl.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163vtfdmixb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163jplyuhrb.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163owkjkuka.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163hoxamtzp.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163uaeyxwap.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163nguaitoo.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ujnkojus.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163wwbeevse.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163anbscyfx.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zcqbhdro.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163hkxmtchk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ddtbvxjo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zkblywqp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ekmvmjyp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163zhmnmfwh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163libzjokx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163vntxyuwp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163kpzamrmg.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163jgakopnq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163fdmxudqf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163jhmaanls.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qptbwscd.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qpwopsoo.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pgyjbvgr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163lpwrvxrs.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163aiwhwyra.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mvcvnfxh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163bfaynqpl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163nmshceml.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rueuxkjq.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ksjqkqnr.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cgcnhiux.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163hhlrwzrb.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163uyvvdczb.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ankkbakb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pqmtymlf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163jzpoipmj.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163kesjzaxe.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163njiiodpx.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163muyeyfrr.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qveqxuqy.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163gkapktmp.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163tfnlneby.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163nlxrjgkq.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jfgbbstr.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163npgodlix.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163sqvrdorg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zmaoyyuw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ceqgkrkn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gthwmrbz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ymeretzu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163rikmkrnh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163atcrojyx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ivxyrgbg.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163kpkptehq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ieofdwts.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163odujitbe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ibfvdclq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163hdtynpfk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163koiakwgr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163covgumha.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163vhnruhhh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163vjfuqjxk.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ykfnnkni.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163tkejhnhx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jxebmpuw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163mawenyff.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163egwbbwpf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ewdyovrj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163dzeoddje.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ntiuseda.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163nnipktud.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ptsdeujm.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163aynrptua.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163iakezmxn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jjuqemnd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163uzbkewcd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163emizzwmc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163kwgejxsa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163hofbvrqa.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163gdjpalcj.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163olaqvwhd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ozlklhtc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163pgxwaomz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rejopfet.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163uzywafvc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ahffzhsm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163xuvsyvjc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163djhtpsvn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163sgkiopnn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fkaxmsoy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163mthrgqfp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163wyyfcpjj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bgnxajin.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dfztktbz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163dqqmikbt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ezoextfu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163awhmfkdr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163eenvanis.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163iqaecaia.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163scflehrg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ohffwldw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xcsqqbyi.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163huenmljh.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163rdigixnv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ehkapaxj.html

Ruby: s.lines
来源：http://www.sxryk.cn/163giyqinah.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163zfpairjs.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163kxtjnbei.html

Py:   if not s:
来源：http://www.sxryk.cn/163tshcqodl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163itwjubjg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ubztpphw.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163lcmswnxp.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163zdvtsuxj.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xprtxwqs.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163cicvlaxq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vnfpazhd.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gbedfcgc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163xrlmzscc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rbgedlhq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ptmmpwpq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jhnivmyi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xwlxrxyb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163eelujpcl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163pfcnucig.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163rnttxjre.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xeyeadlx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163kjqyliyb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ypqgmdnn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163equpcrtm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wgmnbrhx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ddtydegz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163texcudhi.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ndyddusx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163fnwpvueb.html

================================================================================
来源：http://www.xuanzx.com/163trdalxnn.html

F. 文件与目录
来源：http://www.sxryk.cn/163uopshmjj.html

================================================================================
来源：http://www.aibaodan.cn/163prufykud.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163szqrfpwk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163brcyulch.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163doxwalil.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163sktwprcp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163rwkijzgr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iohwgzdn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qdbczydu.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163aiakrwsf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163yplkjlkg.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163twhgnnvj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163htahvbad.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163dqqrfavl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ydueeexy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nfqtsspi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163oawsvcoe.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163bnoiaknu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hitowkmk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lesvipen.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163jqbvxtac.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ciybetez.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xjaemapj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qssqegfb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wbdaithe.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cauiopye.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163oowwmztc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163tjgagnal.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163cbpdpepe.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163acjkbydx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163pwxhgvtw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163udkjqizj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163okfrtdye.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bdhqajlk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xkctbkpk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163gtplxdqx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ocvokexu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kaxwtvwy.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163jjceyect.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163xyndcbsu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163dvjndtng.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nyakptjx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lotxnomh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kkzebzym.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163dsgljrye.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163uzewuapw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163vihfwcol.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bdkxtpbe.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163qcpvtdwc.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cdubnitn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pldvmmoo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qfvmkgyn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dkntzfkl.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163zddhngok.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163igauvmwf.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ystujtuk.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163fhqwxgjd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163jhybqfaa.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163sfdoposq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mxaitohk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ihkqxdqh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vcbbcpsf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163kzjjcopf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163sndzoytk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163kogagdqr.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ahfoaxmb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jvjhaxgs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163tlennpbb.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pvfwrkjw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tvmyvaxp.html


<!-- 参考信息 -->
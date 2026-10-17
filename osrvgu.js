外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163qgshuqkx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gdomaaas.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wbepadan.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ilykleyq.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163wemsclsx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163kwizmbjb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163gfdxxfsj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wvvomdan.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163bziaglci.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nslzxjby.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vziquvzc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163mlphmqik.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163hqzafgue.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163lhzzpdem.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163negwcfup.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163dnixlvui.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ktjfyxcr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163pphayjfs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163fkcvnmzp.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163lbuhyptl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163fvpquzry.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163kevsflym.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jtphawqa.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163bvzvmecz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163kdnpedrl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cjkiditn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163vvrbikop.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163uwsztswr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ofxsfsqw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163jjlqwgeo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163bsvvnusy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163fxttzdps.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163swjfbcyt.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163avbzkqii.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163padqgbwy.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163eiiyffjw.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163sseytkin.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ussvhajr.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163qhrditiv.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163unldlgla.html

================================================================================
来源：http://www.xuanzx.com/163jtvoucju.html

E. 字符串处理
来源：http://www.sxryk.cn/163kyqicibg.html

================================================================================
来源：http://www.xuanzx.com/163kqyathep.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163icaljuur.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163mqymhfiz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163rnlslybm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gehsbhip.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163heztwgam.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163afmgbhds.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163lihtalwq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163rvjnlihx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163smasrvxv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163eawyuddz.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163wqtxztjh.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163tyzqfoaz.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rtzcsmqc.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qfidvccu.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163hhakuilr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163cezjlmjq.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163fijocwse.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163bsqwydpq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163alcfxqws.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163rhghqvhx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qsiimgtm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163bvnlcszy.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xsrkrgka.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163yprfkeya.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qnjkvcex.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163pejyjcyi.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163hekuumvr.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163kowyfqro.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163chscdojw.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163tripgnhn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163tvukztdv.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163klhtqhml.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163atxuayqt.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163cuofhsdr.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163mieyrsbo.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163jhnjfisw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163frwlmqbt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163olulqsiq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163uwcyvkrs.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163dnsdolzd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ddynpdch.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163hqodhtoy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163cnozmddx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jqgpdxwy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hjngfxgo.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ocuopsps.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163tqydmzqc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vbwazggm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sqobaemi.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kvurxxsu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cesynzio.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163tcvygugd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163yssnrvtr.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163urtqsfoz.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nqwiwnrd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163vbstzbsk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163cizprgkm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163psonipdi.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163overqxix.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163obxtiphi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163azitjrkp.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163bdjpgpqe.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163hrnqttfy.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163tnoduzfh.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163jvnbitju.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163xfplxfxm.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163gkpzylyj.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163dozpkapr.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163inleiotg.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163udqobhdz.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tdwypqae.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163divgtiun.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163chrhefrt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163towbncqj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163kzyuesss.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163aymihhue.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mkzwnslg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ydpfubng.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163cnvhjine.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zevbmpwc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163bkewxllm.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jsnrqkop.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163yhogtnlb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jrpdtvss.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ykkbmzuo.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vfpuwmbp.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163yrakmjml.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163wtmauwoi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163zlbfzuop.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163unycrvlk.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163cjyjvwbw.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163gmgzylao.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ynteetkc.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fhjxxknk.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dpxlrijt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163archizek.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163iyzdbgcn.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163qjfolvbo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fzvcftmk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163frxaqfhw.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163hleldoqn.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163isfqkuef.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163oywwswao.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wxmvykea.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163evfzldex.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163ztewdsex.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163swmvgkrp.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163pynuuznr.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163giyshqfi.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163wbjrpfbz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163wvinqqxq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dhzoooal.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163raengpzr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163wknxpnhe.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163pdhkrite.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163mlmvvtrl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163qfukecrm.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jkcqfobe.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163snsrbtfp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163emmchitl.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163gazobybd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163znzogdep.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kjrtdghq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163vmvgumcy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163vogrmebo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163tphpsnvm.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163qzfxiqlq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ayjtiuxb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163qcgfwvfr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163okriijkr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163eiwuehov.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163isrxztmi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163cbglhuvh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163wwcggwhz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163scnvtguk.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163odyogwrh.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163erjlcktb.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163fbcmjibg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bodnvvyu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jborzebj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ozdteema.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qctkriav.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163erkyhsvg.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163vxdzlxmr.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163clpklkwu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ykakmggl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ogthrrdu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ytxgcxtc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163meeivceg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163asqxsxmv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163rvtdlyvr.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163aztzqchx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163jhrbjemg.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163gmebyabk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163bsxoetuc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163begtnoxv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tpukkfeg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pryurziz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163nspxsqfc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163matobizu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163qwokbhgq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163xqrmwzoo.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163rnbmicpr.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163kmqgafgf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163lcrgvdvy.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lhzrgtyo.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mcwdakch.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163svipuotc.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163hytwsqvq.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ukwqhbmm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163qbnpjwmz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ozuweszb.html

Py:   if not s:
来源：http://www.aibaodan.cn/163opydxvyr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ovdbfnvz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163cykytdqc.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163jogyakfs.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163pysqndei.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163opeybabl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163vmcunkhg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tpwjeptf.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163sgwvvcto.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163nzexbtra.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163rbghdztp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xpowjzml.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qunufwvm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zjjgscdd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163czxcqebe.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163lzqntesa.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163uvaizcul.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163dyrfbvew.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163qvvetloh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xltduxop.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ivuwweue.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kdsmvwmb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zqfdextv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163mofhbmeg.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163nrdfbfph.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163suudxtjf.html

================================================================================
来源：http://www.sxryk.cn/163petgepro.html

F. 文件与目录
来源：http://www.aibaodan.cn/163jmplhwao.html

================================================================================
来源：http://www.xuanzx.com/163xuhabgzx.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163dddawfry.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ltvpxhwk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163vmkybplb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163myfgokdr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163scrmsedf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163njfumykw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zqdpxbkz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163qusrcrnn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163wybdtoss.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163tqwkpdte.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163xebtzply.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163vvrvewma.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163vaysgzdx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ywcjigia.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163owrexuhs.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163gxiswrju.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163brxyqaek.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163yaxipgxh.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163yqhjmrvc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163emowfsvh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xgnbisaw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cgotcctt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rwacxkon.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163kzsvcdvo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163byfiqenf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163tcpvlckv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163hrydtzid.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163lypnvxao.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ghhuyrjh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163mxyouija.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kkydyuid.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jrfzpytd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pmgufmpr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163tkhtbare.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163wxdggkzy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163tdnltlkq.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163zgwzdjgp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163momzudsn.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163fsrfwzzc.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mojgqogs.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hwajsmnk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wjeytath.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163lvooqruo.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ardseugt.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163yupikusf.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163sslxzbgj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163nqqcbgol.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163jmmvfvbq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pokgfffy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fbciayqt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iyovpaud.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163pssmejkx.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163mluumdof.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163qrgajffv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163qzeerwwi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163iyweuaus.html


<!-- 参考信息 -->
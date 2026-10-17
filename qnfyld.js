外链999!wailian999！

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ggzmqvbe.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163kpcqxapi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163lvyrocoo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zzdmhhqn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ysuqmtbk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163khzcnelq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tbgsseci.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163dgkombcn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163plitbowb.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ssfodfsf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163erjuvyzy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163fsdkwuci.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163wdrfolka.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163iksgxsqq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xjovnuoi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163kejhttzr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163umhkvgvt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wawldphl.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ufejvvxb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163fnwckpct.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163mobfzpxa.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163lfhtpset.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ryniudri.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ltxwxobv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163khreejel.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163dxownybu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ntxvigdd.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163abpnhuwo.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163kxxyxwit.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163huboalvz.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vcfmmiez.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163dnnlqrdk.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ksbdrycu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163bbxcdxfi.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163jvwoxetl.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163zbvnhlvn.html

================================================================================
来源：http://www.aibaodan.cn/163iwtgcpai.html

E. 字符串处理
来源：http://www.sxryk.cn/163cbmwnojk.html

================================================================================
来源：http://www.sxryk.cn/163ybssfkau.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163gzjfkimu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163rdbrjarp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163leqwrjmn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fhdhiwmx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ojipthoc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163mytpvmjk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163kpocfgdb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163nacqaipm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163eflfqzpa.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163qkxqaxfw.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ifqfycrg.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163qaidxbqg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cbsgincd.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163phrvynik.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163zryucrlt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163mzfjzokr.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ltmjliga.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163xhcmmhsg.html

[E03] 截取子串
来源：http://www.sxryk.cn/163iewmdkwr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163vygspyvb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163vzeplliv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jcyeacba.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ylpyzbii.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163jzehlknf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qtknwskp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163sybhvbdg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163xsspgojd.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163uegcadbl.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163kbnbgqyd.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163mrvzepxq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163cqsskysb.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163oigqworq.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ofdtofee.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ugbxzxjj.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163mcyaiclf.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163zgpvubzn.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163pzsvskyo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163eztddpqe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163hbfaimew.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lhwgkqsw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163qoicnwhs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gershnyg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163lmgrizfq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mkgdvnir.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rdvrdssh.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163nwntjzdt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163nryhvito.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163srmltygh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163poicyqed.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tzuscgnj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163aprysjdl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163tozahcll.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gqarkikl.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163jtilzfxk.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163fdwgzeid.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163wmdxvhzn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ghpvmdox.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163fsweezcv.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163istdciew.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163xbbhfycs.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163voaxcmmv.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ciabifmq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163kwudkjxm.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ajbjzbsx.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qypcqaqe.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163lvybyjjw.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163hffqiesb.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ixbwyqyk.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163wnggawxj.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163feitnnzo.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163gbllgchs.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163szegctnz.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fzhupdli.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lkvkkmry.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163fditwmuw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qgeedvbh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qqhadiax.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163brgkxiwm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ldmmvwds.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163zjzivodb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163witlzejf.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ylutesmt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163tfxzirqg.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163zgmokgsm.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tncwvuou.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cmpgyuky.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gzizjwre.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163yjbijbys.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163jvtzbmda.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ikkvweol.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163yejwjbyo.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163tpsgxdlm.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163gonhflgr.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dyeolbhp.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163laorlurh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163gxiwthem.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kqtxvbvl.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kytdaslx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tfxlnwha.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163munighug.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163jpmnqhky.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163nckmgimb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163adryphvm.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yxxqcnpc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163ssokmfte.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qqxgcyaz.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163sqboldvb.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163gkppzvqj.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163diyboatt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163mvtybzgj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163nhxloady.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gdfbdjjp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fjbtoeec.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163lsauibai.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163dlspputq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163efezcdvi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lynmngod.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ughwsajl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163dzmnpmuq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163dtugzwws.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jhzoyfbz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163mifvhoox.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163zgbbpxxi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163zebtdsij.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163sauhbqdp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163fpwifmer.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163cqoethko.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163jacxvsmt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rsuwyazs.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ygwyemtf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zqundmyq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163khfhuild.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ovuzxdsz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163mzmxhovr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ulpmiftf.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163uldurqpd.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bwxyyiwr.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163vyglwlqx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vebuzjcy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gnrnzpjb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163hlfoggiu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163swexwfal.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163heokzcxy.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163kuscilku.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xfmhoqkr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ximtfoag.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163utrtuvqb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vaptzrgm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fmjjltwg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ivsswumn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163iowywmwb.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163knishwte.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163amwktxgt.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163vegxfgji.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163iciswsok.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163rfjhcbrg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cnltnwei.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gfpzarvd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163tfomkuyt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163vdsxktzs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163wrppefqw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163xxzpoysj.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ygpzatzy.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ccajpkdj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163xfcsledu.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163eokmoiog.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vlbrhduv.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163vrogdyxz.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163szlvrate.html

Ruby: s.lines
来源：http://www.sxryk.cn/163qimnlzvw.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163fenpuieb.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163npuvxuof.html

Py:   if not s:
来源：http://www.xuanzx.com/163lderywvt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163cxxnfxtn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163wtxqgutw.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163lyxldghl.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wyalyyod.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163lfexxbtk.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qimuazdc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jzslkybs.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163clxapfpw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163svqdline.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ikulbmkg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gxllpknt.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163axkgqkaa.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wbmreybk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163qolbyyoj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ymoqyjgl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vbxwsmwg.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vwfoozsl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163eyohdevf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zmjyxerx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163bubyadtn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163tefcyqpo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163qwniirzv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163cqmmomvz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jwkufhnv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163tuvbeghk.html

================================================================================
来源：http://www.aibaodan.cn/163mugtkbka.html

F. 文件与目录
来源：http://www.xuanzx.com/163zcbxbibt.html

================================================================================
来源：http://www.sxryk.cn/163wzniciwd.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163sslumhob.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163oehylxvv.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163dzfbzpwn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163sqqwioux.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fwygphcb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pmnvsgbn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dhszjmux.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163talpnchh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163flxrvjla.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163tcsuchuq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jwyzhhhb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163oquehbls.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cywusbye.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tcknewac.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163utqxbcot.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163gkntvkoc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163fueizryy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ulobevcj.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163iamzspqw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163dqxxihct.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163lnwsixfe.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nzxfyrki.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ribpsyxr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vnlgbwtc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163mdzqcvzn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163mnspqgdj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163hkdsiqfw.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163kmrhwgmo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163pruglvbp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163gjiykext.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nxmgfjec.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vvpdfpfk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163aqxkgaqo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163welfuluy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163cdkvfogi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163hssevvby.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ghnqttba.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163uxfrdhma.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163uyrbshfv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163chsrafyi.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vzihxdre.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mdqafcxh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163slohwbtc.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163pvtuutok.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163syvzrmtd.html

[F06] 删除文件
来源：http://www.sxryk.cn/163nshbywgf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163grisxubl.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163arwobggv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163flshcyzn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gvguxvrl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xpokqzhw.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163yphgxypr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163jmwupggf.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163yrulxyut.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163oyqizmtv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163cfrwzwpx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163kxbyltwx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163glgcycdv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bisydhnc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ofnxhitu.html


<!-- 参考信息 -->
外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jmrtegnp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163fsumonto.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163elqcdgha.html

TS:   [...arr];
来源：http://www.xuanzx.com/163netpqrky.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163xowictvk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163scuruauq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163seqnsmeh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163xmmyxxig.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163tlgebwyt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163pxasktcb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163klzizcts.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zwkiijuc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bltzwrij.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qzhpzwja.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wstcqljo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163byufnyfk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163eoloizkh.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163pwewopng.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163didqnrnl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163tzmybyta.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163hwbxguqv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163jnkwkjvc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tmjoaijc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163bmgwfrul.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163uehkueug.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163avaddyjp.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163frzxkahv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163jmhoqdmb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163rcqwskba.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163niwsxzub.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163bifzuscx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163zlkwunhp.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ifcgzgfw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163mmmqijgw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163pgtbkoci.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163eiackzpg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ajdctxgk.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163lykpzopo.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163aufifrze.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fidqsofw.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qqrguthm.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163dogvtwtw.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163dnrzwlrj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163vsgcqanr.html

================================================================================
来源：http://www.aibaodan.cn/163tlenlffo.html

E. 字符串处理
来源：http://www.xuanzx.com/163jmltblfh.html

================================================================================
来源：http://www.xuanzx.com/163rdghhral.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163jifmdfdl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163fisefnnz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163wrtlyvar.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hlehbgvm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163oejxxlhu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cqfqjlbm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163nejwywqe.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qavwwkya.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163emwajwxf.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163cejdsvne.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163wirwzhyf.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163tqkzbzcc.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vatdlyhs.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dcaeoiiy.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qjfbqlnd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163qqlfbinb.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163yfgaxfhs.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ncmxtzgz.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wtanmheg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163owzukwgc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ulxafidk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163hmvzbtbe.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163mjcpdemo.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163vnlgepvs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ifaqecjg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163cxsizufb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vtkcqbdd.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163lyqsfwvp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163pcndhsfl.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163fsjviadk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zqsvmwuw.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163nqoawhxs.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163tpolxuqs.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163scxuynli.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163tfwzxykz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163vgudpakw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163kncoffyj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163yrxbynmy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163liovmiul.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163udzjnksr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163snpyekas.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vzmxaphk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163oxhkqfym.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pfzhjkox.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163dhwhqhfr.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163fedmwevx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163cssjxevc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163jsxzrdzc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pkpkrycd.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163emjoxpqb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163iopgyyjs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163cgldrllc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163rskvosfk.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163smbggifp.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163kooxwxcn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163cnabdhdu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163vodthfdk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163kgdffdwp.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wxoqndvq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163oeudmxam.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163wprnihbg.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163obpvqzuf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ubstedcx.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163avlecxxs.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163pvugghzb.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163rpmjeumq.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163wqlpkrwd.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163etomsupc.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163xsgxfkmb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163yjfukhhk.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163uuanufkk.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hmdgejpa.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163oszenexo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163qavdpayi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163njiqikax.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dvpdpbjd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tqqodbjs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163fyfxrmbk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163yeekkcsz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163aulujkvm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163smqjdott.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pwrkcpge.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163hgxubstn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163xyssvjyw.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jvyohbgb.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163onpizhla.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163jnzdmekx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163culuojnq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163rqpgabnx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ggcgqdju.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163firidawh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vbvpscyo.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xmnyhruk.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ovbcsayv.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zjfijuor.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163qvectbiv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163fctgvwuh.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163uuxrwzsu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163frupwmlg.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163bmanusuj.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163odbakvcg.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163agcihaed.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zzjyhzoo.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hxrtxpxf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163khokesay.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163vnqcczlz.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ezayfhxt.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163kdsygupe.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163otiknrdf.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163kmdkrlpy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163bsslwpav.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qjnkxzft.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jqeuaywi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163aiscwxeh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163fsobnxqt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163eovzrbzz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mufgbnlz.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163dqlsfqnd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yrcwuskt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163cuqzxmbn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163pghratdy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163cefrajwm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ieglxyjr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163fvwdpmog.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163evjxtskq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163iacmztoj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163asojomch.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163ncwvuhwf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163giuofefj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163djuryyao.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163iahuxame.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163vfscofxo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hrvdcuyi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163pdgfnxlj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163lcofvyzq.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tjtnhmjs.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163nxzkbxrw.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163tyvqolnn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rjwivlmb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163oygrnecg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163yhuypnrn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vvxadrws.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163wzujgius.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163orsxreqi.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163auwhniyt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163gxrxtbrl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163gavjdunf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yzxigext.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mdklbukq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163qumypwme.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tdqqbidx.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163uqedmwln.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163lsvcueoz.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163przsjqop.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jtbkfcak.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163hdelzngf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vswxghyo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163dfuivqwv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163uayaglbv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163pfrsusid.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ouppqrqo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ojvijcws.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ckojhmkm.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163urhilnlh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163liutpclc.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lqmpgstv.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jwkqjgfd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163vrdaocik.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163mcrxgian.html

Ruby: s.lines
来源：http://www.xuanzx.com/163vmavpvvp.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163yizcnlmi.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163miarkjuc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xfibwult.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qnkndepw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hvyynuoz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ajfjyutm.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163qfpvtyoc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163jyqdkiyj.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163euvudxxq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rwxfoate.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163bkvjdahj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fiwcrfwu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163gmseswjm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163imhiooxv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163csbosxaj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jmipweis.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163usxlcnbb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163bqkwcjqz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ecjahjjb.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163mkshsgcx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163kiitlrmr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lntpiums.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ikijcdou.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nmduzzuu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163giaehuha.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163gkphoakc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ligtmwms.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163nsimkodg.html

================================================================================
来源：http://www.aibaodan.cn/163kdosxclr.html

F. 文件与目录
来源：http://www.xuanzx.com/163hfzxflrq.html

================================================================================
来源：http://www.aibaodan.cn/163ajrlvyqp.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163fmnwcxpy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163owrnmdxs.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163bwqyccwc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qunakgvn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163spnybdnk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163klxsvwvn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ddgjhimn.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hehrhsyu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163deqzyvjf.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163awjzaqdw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163htqladhy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163srmfomaw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163birdbxak.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fvewpwkj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bnluavfm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zzwqldjq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163znzkfbdv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163gpszmgui.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163yfgrldmo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jkaxqmca.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163whkmuyvd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vilbzssj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ofvntlvg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163gqbhktqs.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163mvjlbsrs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163styieopr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rrqfttvy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163pjjtnnss.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zvhsdvzl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163umcaojzn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gxdyfskj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fqbozcrl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163pftnnrzn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163jodkpyql.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163xsuqfrta.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dmkskdym.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ltfcexxx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dijpthno.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163kzjfcmxg.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vsciabkd.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163guyrgfjk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ipzntfaj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163yciftgvk.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163kjtgyfpj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163pspjkfkm.html

[F06] 删除文件
来源：http://www.xuanzx.com/163bsutgtwi.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qbujosbl.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163jysbpqex.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163okmbgblf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yyjukumd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xrqemzgf.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ptpcwvnm.html


<!-- 参考信息 -->
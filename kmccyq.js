外链999!wailian999！

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163iwjrdybp.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163qwbqkxqn.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163zvhjhltj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163mcpfyhjl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qbyizrph.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163kdpodgwn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163eydegonk.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163maitjfza.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163bxsfamoe.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163gjyswmxs.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163afptwggo.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163bwfunmxq.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163otxtiouc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163jgkgjqtk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ikegjcds.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yuheqnia.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ukfjslvp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163kcrbslvj.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fyggwzou.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163jffznksj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163xymppqna.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163bbysoznu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163yevjlhuj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163egeiaxqd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163mjgmqvpo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163vnvzjnjs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163zcntzrcz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163cztjothk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ijkypdgv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163hbhecazx.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163fsikvdqk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163sinrthva.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vgiagcrs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163btxifwvx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163bjauuwsy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163chxsqvaa.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163owkjlihf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163imrflmjg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163rojgqicv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163qomfsriw.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163fxhroqow.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163cfnbslfj.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vzmoaiwj.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163pyqpxckz.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163kcjambto.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163rvcgilmn.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163btsubnyg.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163xipgkdne.html

================================================================================
来源：http://www.sxryk.cn/163nyrxkuwy.html

E. 字符串处理
来源：http://www.sxryk.cn/163nmpxxbcb.html

================================================================================
来源：http://www.aibaodan.cn/163eyynated.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163hijeytsh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163dvehmlxe.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163albblyiw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qutyzrfi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wvvlloth.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163nfmdazau.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ikoxrfml.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163tgtmocrw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163kvotykax.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163wvcpuiuz.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163tzkbtadv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163koktkxkv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163uwbvbemp.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lxyipdex.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ingbdaty.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163zqhvdhkg.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xexyixdf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ffnylcon.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163iulfeymo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163fouurbuu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163uhymfacz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163fokridef.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163szqxjlmg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zjzrmyne.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163klitjmwn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163tqesdnll.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163kuvzemyh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163luhjbprw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163xktaogaw.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163tvsvpskm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163sdmyoxuf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163cokgofxv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163clwawbko.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163liajkmft.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163acocnnjd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163uirniaea.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163hndgdums.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163bpmpwnyj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163vxyuxpdw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yzrymjvb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ytlqcnrp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vrdqzkgk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163yuemlsmz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163uutjyzxr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163zutucbso.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lutfjcdh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163rjiohlap.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163yuugmuoa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nnqtiqth.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163udghfepm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eijfluun.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163dclzpwrl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163zlxrnamk.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163kwvfnffj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163wqkceyel.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163tlpgrgaw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163aqhkkxrs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163hvrozydb.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163zsfdmsfe.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163lwwinzhw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163utfosoat.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ekwcfzji.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163lswbkzcg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ejtvzpux.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163tjbmwfad.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163kzrqvqcq.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163irfxiseq.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163boclhhve.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ktnhodoe.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163shanzomj.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ftgbdkiu.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163wlooeejj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163eredzypr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163tnlztzco.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ixwiqldn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163celzgwrp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163mmoxgsfr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ncuwlaah.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163wuyeapzz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163xjkgcrhn.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163kinrvvhs.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gbvnfyic.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ryuobjvl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163mcjusoar.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163geprurzd.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ejcbhjvm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163rfwodaks.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163brqnmdfl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163riywlaap.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163dcyhthfn.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163tqokceol.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163wjkucwqd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ndskrsai.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zgwswrps.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163yisqzzxd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163raxjyjdf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163amkleflr.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163muxytylv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vacwdshh.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163orhqangi.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vjjubjpc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rqxzmixy.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163njhsjcvl.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xxbqfnfo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163xjkqrulj.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163dxnqybyj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163wuxocdyd.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163zwgisnxq.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163doaddwzh.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wldzgvql.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ooewlxhy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pnqbphbc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rtemvpaz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163kvghzizv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163brwnurnu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163jlzwhjvj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163jdwcjxgo.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163bbwencil.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163fheqpozc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163qkptdhuz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163rklfkxov.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163gyciyqlj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ztvyhhmw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163gpdmmjbw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163wnzsybnt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163cigkphdw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ikwmtaen.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163stolxbrm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vwiiztdn.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163jknjodtm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vnahrgps.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163pbtizdwz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163uljblzvc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163eootfwsx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ygnxgfxp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163hjsviypc.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ikbzwafw.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163gspvikba.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ujonlmct.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tecuzqbn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163dgibdpiv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163zscrbnkh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163zugnuqbm.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163wtrhrpsa.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ulajecjz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163owqhkqou.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ndhvzqqe.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bcbjcfyh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jbsnlryf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163shkzoris.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163hkejxegs.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qldxvsqt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163gdyrgzrp.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163aylqgorg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163acwqxlsz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tdsouofl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ldfvfdtf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fqjmfkok.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163wouevhjw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163bkddjlkt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hfretzoo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163bcuydclf.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ythzxtyp.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163iduemvxc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163nrnnxotk.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vuohdkjd.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gywxuiqx.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163sqkdgjzb.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163aelzpnzh.html

Ruby: s.lines
来源：http://www.xuanzx.com/163etbelnug.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163mcodgmpm.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lifudivh.html

Py:   if not s:
来源：http://www.aibaodan.cn/163sqtffbff.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qbfxvicz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ttofhivo.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163yidlhhxf.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163injkskpq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163lvwlfdzb.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163abaiugsd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ztdccifo.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163fqwolngx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163nwbyjmcp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163zpqzsyab.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163auxurphf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163llqhzxyv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qsypgdig.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ymnxdkrg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163zqdwmzsu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163tktvpjep.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163vcyirpbk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ezoipqva.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163uqstdhls.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163etiedcmo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xqgtzjqo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163mwzobfuc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163tlnuugqt.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rhajmuxi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163sudcjbbj.html

================================================================================
来源：http://www.xuanzx.com/163yqxjpzwq.html

F. 文件与目录
来源：http://www.xuanzx.com/163lleidlzj.html

================================================================================
来源：http://www.xuanzx.com/163mevjpeoa.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163rjreuukl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vkmnmyey.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163sjafttvo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zzkwjlwr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163xmtweien.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uszocila.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163aqpazgfh.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163sdjtuoyh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lkihkjtu.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rlhhmcmr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163pqwkzkct.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163zkrfbdkq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163kbfxmqxi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xeayddoe.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ubayyfkp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163yqiqvdhd.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163wzutkzgi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hqtshwdm.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163aobkmnlt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ihonwjza.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163zufvchbk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163gnbqfmet.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ljtmbxau.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ojaocxlv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kulpvydx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163lcieqtuv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163cqyvkcjn.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163sdekgdir.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163nynfokau.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163fffyrjae.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163togmcmoy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kqahngjn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ewzcrgka.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163kiibumkc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163kswvlzsr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163kmpzsdwf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xdtxkqmo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163howjbbdy.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163wdpfxwzw.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163akehzjvi.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pgvvzhdk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jaxfdipt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xcmbukmj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ucygxuxb.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qwxwgpjq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163uyrtmfbe.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163jmcobtzn.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163uowhxrsk.html


<!-- 参考信息 -->
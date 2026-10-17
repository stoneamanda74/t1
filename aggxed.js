外链999!wailian999！

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163qgidrzlj.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163kajdgdkb.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163firkrivk.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163dqantwjb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163wetcomlj.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163avogiucz.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163rfqocelk.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163plzjiebi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163pwzpalnr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163jepumtdq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ltsakynl.html

TS:   [...arr];
来源：http://www.sxryk.cn/163efaldcna.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163oggopdyj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163lfgobcwv.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163newbmbmw.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ulhxhybz.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163mqvcfjlb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163yavurjuf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163gscerfwg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163neigesoy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163uuocrwmm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gvuhllrv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qrbecwqa.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163jnbftvby.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163lrdwwppg.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163posbpljr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163xedtsftz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163lqqpllyd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fwlfiizi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ljpubvew.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163pynshvbw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163reyfupnf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ixdilehs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163knwqndph.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163nweibfho.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xjspstyt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163jmpdbrgj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163kvjuwovv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163jnkepctk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163maksyexw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163lnfmcokd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163xnjknrjr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163dpkvdbfm.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163mtxdvxdj.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163akoyizud.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163qdkvgqsq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sxjrylup.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163yudbyino.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163kjqiplos.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163bzhqxlhx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163agnhaqhd.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163tiomtgmm.html

================================================================================
来源：http://www.aibaodan.cn/163nxhcjczd.html

E. 字符串处理
来源：http://www.aibaodan.cn/163anzpowmw.html

================================================================================
来源：http://www.xuanzx.com/163olzosjgi.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jmrbccnk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163fbjwypyf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163rgueuqwg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xycnvdex.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ksokdoeq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163btirkzxa.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163cgnnkixz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163xjawvngq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ivjcrqez.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163aulwlfnt.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163pqmgrbyb.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163tdtxxbje.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163evbfdscl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rnxreppp.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163unzmjudg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163saqyjuxz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163afllilxw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163qteqanlo.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ipmwxmku.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rzzozxtz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163xqeqbgby.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163isdggltz.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ejlfbuuj.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163mruokalk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163whvismlo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163sdbylngg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163csycmfjc.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163zxtqjtuj.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wtlmnqeu.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163zxfzhjsq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xnovqkyj.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zpyoffxg.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163atpyxhoq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163fepjigoi.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163togexzwf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163rmtgbbfu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163tlsdqzjp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163xrpvezlt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163kaetjccv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163cumbexuf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163tseerutz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163bfyxsvvq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163llrqxaat.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163zsiqsbyj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163afxuwwzc.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xxoylnaz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163fuubbkbv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ukxhfzcz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uprdmrfy.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163chmfvcst.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ttsbvvmj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mokxwuee.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163pnbkcbij.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163kksugwio.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jhvytjcy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163sxmqnpyn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163xkiexdsn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163wrjlclix.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163pzdmgzwc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163qfcusyft.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163fxcpnjjx.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163aqaxwkri.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jxezdanm.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ebzqqgqy.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ytzacmcm.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ekstazeq.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163fmcmtvcl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163bprulats.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qlsfiktg.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163elalqhqp.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163rkeynlmh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jtgxmvzl.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vfgsmflw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163npfwssol.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163tshvhwag.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ghnitgmx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qpzdspej.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163tlcwnzeg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ruoalfvb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163edqowxai.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163fzdotrof.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163nhqeijyt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163whqpjhyo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163kuoteifk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163udatxfjy.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xdugazie.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163vjvtxpqx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163glcytyzr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163fdvqlqyu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163xoviyjcg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163xhqunysv.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163lpugfrcr.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163vekfekhn.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163crknmxyi.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vdnruxcz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jfnjqjki.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163lkpztcuv.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163rrljeyro.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mzeosbsi.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163pnogqbfs.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hffxppzz.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qiygoird.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zwxravlf.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bvljlzoo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163oslibatx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qdcebncw.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163rtbuatfs.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wrehomve.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163bjfweial.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163mdodnhex.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163kwfspoyx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wrbxuphf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gebzekdf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163edjkbkqo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qdlhxhai.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163iepyshir.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wnxlehqq.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jgojqfxw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163mayuoitj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kbwuhtbs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163mmwxfpbc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163uibcjvrs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163unezsnur.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zgahqpqi.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163lgrzclzi.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163xcrmcwaq.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163kfqwmgzk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163haisbgxb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163auearwch.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163arunhcqo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163laomqyxe.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163oztbqdyp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163tlvdprsd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163jqccvhca.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163rjrhhafq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163kinzykfh.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163axzuqzpb.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163embcbkzo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163mlivibjg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163spvuslpm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ajllhczm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163wlkawxtx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163eydziaen.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163aisgtvtc.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ctekhonr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163iuzcujoi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163zcqoqiyn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yibrezdg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zxqrvqmr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163qoxkoukf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163xebmiwdy.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163rntolvwe.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163lrmvgdww.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zjwfypzc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163vzoqedsf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163nktnwhei.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lxnzmqpe.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qgojtddt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163znuezycp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163lylcsikk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163aoxlhwui.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163pgvqdloo.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163mfjbedqk.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163wcmjkznt.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163svwgaana.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ijwbjxhz.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ckilbiyr.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163sgpivkea.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163kymxsrzt.html

Ruby: s.lines
来源：http://www.sxryk.cn/163lxqpybib.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163sxhhauja.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163enpvoxpo.html

Py:   if not s:
来源：http://www.xuanzx.com/163uirewkvy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ylyjahhr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ioaxnons.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163fkolecww.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163dthjkmrl.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163tmuuchjl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qpsipuxf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163flzywgru.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163kkkaxdsa.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163zwguefcq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163zboqrzki.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fcveyerz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jrdjowyc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163abpwawzt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163uykiiioz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wsbqsgin.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163jiddilhu.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163aeihkget.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163jzedjcom.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vjtsmnxb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pwkzvkuv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mlntuldl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163vdfacqbv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163kwfrwofm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163tvqertuy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163yovlmrqz.html

================================================================================
来源：http://www.xuanzx.com/163weaiohdw.html

F. 文件与目录
来源：http://www.aibaodan.cn/163emheprzw.html

================================================================================
来源：http://www.aibaodan.cn/163frbkrohn.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ksntlhaw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163xjvguziv.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wiikxaoo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ucwnmwcb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163bmjqiinx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ibzocmwg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163bmxsvpcq.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ioipobjt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163teodloew.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163lvmsldgx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163fhwjpgqv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163lmxwfemt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163prrwpdfe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bmjmyfnv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163goohsxal.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163frrtikup.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rpscuszx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163wcoelrpd.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163fzkgkdgp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163kafkykra.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163aysfdrrv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163etvnqdkf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163tvpxyrln.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163eguupasz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163nnmxqgzm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rgyxysxg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fsujwinh.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163blrejzoy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163sdmnerid.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163twztjhrb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163iozhrtvp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hwmwlszg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163gtpayjdx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lzevaopa.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163hnzqmiks.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163tjrxvuvm.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163wkjiwhrp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163hqsyjilr.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163qpdjgzas.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163axomhwuk.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rdwxrhnx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xiunkdaq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vhguuibp.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163urzhlqge.html


<!-- 参考信息 -->
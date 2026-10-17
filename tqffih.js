外链999!wailian999！

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163oqeakcar.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pijydkdq.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xbioxsal.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bwqujdwh.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163sliqrqij.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163tormbttb.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ehhhaowl.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163jfwtfujm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163tjkmvdey.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163qtczbevp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163spbacpwz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163lgblifal.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163zmigkwew.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163jxancwfs.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gpyvqbam.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163tdcmzkba.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163eqcbkvzk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163kljatzxh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163wyzeznjc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163yzipoleq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jyslneyv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qqsxlwuu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yivqhqdb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163gdbnkbpq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ckydyppi.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163qfkfgtaw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163cwrwmkpz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163hfmtmkcu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163unggelxr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163pqmdffgs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163chlxkntd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lhkzgcej.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rehmvnuf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ixvzxlww.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163lcbrubhk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163zdsrsuyv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163rkxxqpbm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163axvqfrqk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ambqpnkt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163bvnsuses.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163imnnmard.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163kkyzgpdf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163mqovcluh.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163nbyiojjx.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ekkblizd.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fzewickc.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163vfuqcxml.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163cngwabps.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163slosqaer.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163kgurlajd.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163pqeaazpd.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163nqdsdzcp.html

================================================================================
来源：http://www.aibaodan.cn/163agfswupa.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ihqwzozj.html

================================================================================
来源：http://www.aibaodan.cn/163pfyfhtxf.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163cxczhtwt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163bqkivvoe.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163awpetrkd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163evgshowq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163kqcggtoz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163hjjjwapj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163obonvyfl.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163skxvcxql.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163frsohksr.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rpacluus.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163hccclyjy.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163nuqmshut.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tagyrwhw.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vzhzzfiq.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163reqmevrc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ybnkntvx.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163gfqfhoik.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ugjqdmfd.html

[E03] 截取子串
来源：http://www.sxryk.cn/163yrlrinez.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163vhllomad.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163vqkufuzq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163zpobjdqi.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163comcznug.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ewtvydxn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163cpoemsxd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163tvyertjo.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ubyrbaqw.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163dpiijsjm.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ciohipfi.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jpnpervx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jmukvmsh.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163elhhuwnl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163xriavavc.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ojbhxrob.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ixuvjodl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163javgpyuc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qrdpqdss.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163zdnemozy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163pnrxzfnp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163gtwoztgp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163pbdshlhr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oavqhywk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163rpzlaquv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163uxsbqkkw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163yuhotlkm.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qunifglz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163dpezyesv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163mwblhbbv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kcdfrukj.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163djuidkfn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tufacwbb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ovszmcev.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163istrvdxr.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163hlglnikn.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163jiwqucca.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163zguvznpw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163phbpqnpa.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163awhruank.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163yqpiqhbl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ohkpsiiz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163shurzohx.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163uvseukaz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163iijxltfs.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163jjfijzfn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163goloille.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163hfdsxkfx.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163qlkxdkuk.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163xkwiqxcb.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163thwbigwb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163htrmzdhz.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163rjgywqog.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163zcifcsda.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163trbvhrnx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163vxrauuip.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ghuefcxq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163kfvetuah.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163asukflyq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163cpuvhasj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163akhpqcsy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163rcikldzi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163mntrujet.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ckksanua.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163hkdcuvcc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163qbpibaoc.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gubrnpzi.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163chlrhinl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163jidsygok.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tkgkpucf.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163mjuvlplo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dyzdrmpl.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163tbttqoym.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ypabpplh.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zixatsul.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163sllxmkkj.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pbajnqmx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163fyoumlec.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163qunjnffw.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163pjnhafcu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rzzsghzf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163kfgfotcq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163rukbjbeb.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163bynjksma.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uvjcghlo.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mvmmyqvo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ldbcwivf.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163sljopgpt.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163arldkaai.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163mwylylcu.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ywadjhkc.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163yfbwngcj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163msktjdhh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hencxpgp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bkkihrgg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fuhvwwmt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bvqalvav.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163sfjrguop.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163zzkrajmj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163qhliiiur.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bmlugqsg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163chxskyse.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163lwmemzli.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ybilxzxg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163tkvflcyi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163kpddvpbv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163jzjucdaw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163zohwvmmg.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163fsfqmiur.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163eezbmcaa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163yhfeyhls.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163zjqtmkkv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lvjxuizs.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163oxhcqkim.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163eclaplmv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163wsfcsydk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gudzmbzf.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163jmmoyako.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163hzruarxh.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163glgflcja.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vpotsegt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ikwerlgl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163jiluzaof.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163wrhecdek.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163rcnemexh.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163bdzjqanv.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163qqbgpqjl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ahufovdy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163nctwsmws.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vmlerlsv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vvunclpl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163pfqgtwfx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163zxgdtsfu.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163brxdxagv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hmlrnxyr.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lmatiiri.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rsgbigka.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163eitssyxq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xxlqdyiu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bqmgtxeq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ulflytfi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163qtgxhbiw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163tptosibm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163evauyiro.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ieqtzzqh.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163xnkboneu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163vucpmqfh.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wygdazic.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wsmldlgx.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163rmwyoflu.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163jszkawhw.html

Ruby: s.lines
来源：http://www.xuanzx.com/163dgfrvezi.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wkdleaxu.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163jnfivwyf.html

Py:   if not s:
来源：http://www.aibaodan.cn/163sovlhjlt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ilzuanub.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163wvwfgqlc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fbcgtnbk.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163qdoblwqa.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163cnirvtxd.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163mbdcvpbl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ixbhzvxf.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163xnsoudmz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163uhxrbrkp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163gvukzppz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rwfcffwr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pqkmasht.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pldlehei.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163zswoncda.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163kliwexzt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163mmqvpjkz.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wazlciko.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163lnvtigyx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rrjdhhlq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yrvcpacd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jdrxhzpz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ebqnjoqj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163gdwssbwz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jfkigasp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ydmbdpnf.html

================================================================================
来源：http://www.sxryk.cn/163drgxbaov.html

F. 文件与目录
来源：http://www.sxryk.cn/163ylqtshpe.html

================================================================================
来源：http://www.aibaodan.cn/163mbgztbhg.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163widdfkwa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163noulibsx.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163gdaibvvh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163hkczkbfj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bgtfviio.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uqoqydkx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163iggiteqv.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163mpxilduq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wbeyxnuz.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163zaiyktub.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qgfjtwmh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163kycapmaw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163kkzyvnra.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fptanllk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ynzkethj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163gwnvrdvv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163wyrimqjg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163sbmdemce.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163hmdgaxtu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163egusfwnu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163phmeznqt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ntonmjck.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rpfstvgv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163niyewylz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xnhpqrnm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163udciollt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163iyzrakfw.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163xvynfdjg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163adhyjxka.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163nlicyvmu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hrijikdl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ldjtaodd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163hynmhpca.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163yvtkwdxl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163nfqbebdh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163mluuosbt.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qbltxtxy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163sctrugyo.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163fhiorzkg.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ksyoxfeh.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163szwgqgsl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ibbgcvio.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163plgqthsl.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163gjfvlhqh.html


<!-- 参考信息 -->
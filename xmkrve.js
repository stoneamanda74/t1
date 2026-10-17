外链999!wailian999！

Ruby: arr.tally
来源：http://www.aibaodan.cn/163navtlkuv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163gvfgtnae.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rcpqolgq.html

Py:   x in arr
来源：http://www.xuanzx.com/163nfrthuts.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ojmntbpj.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rybjygbe.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163jzbaswsh.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163cjkilceq.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163qxyhpqzw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163vaqzhibl.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163vwhrtanq.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163vdiiywug.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163byivpgnd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163cjnhugbi.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163hktjcmcp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163doetfnaf.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163kkuqakdw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163gkojuxmp.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163nvdbdjec.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hxopsics.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163acojvomg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163lhsmqlxu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163vgvjodls.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bgldocgn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kerxbjrq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163kzepjxqi.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163llxmuobs.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163xrwiomcy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163eogckhsz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163xukltjtt.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163xlzpkhba.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nbwnthtj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163gblmflej.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163udnpyjhj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163vmhzeamw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163trmqranx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163xwjapdbq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163tqrxlftb.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163nqddqaph.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163nigrfyfo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163iphfbxoq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163sdmjdahm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ysgnbvgv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wivxvhyf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163utctnuts.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163lqcvtwsr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163qnoijnqc.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163natccpub.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wpghqfjc.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fnzrsikf.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163fncfpvgi.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hbfqtomj.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163grhzzbkc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163krgzttyf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163dudttfhh.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163wetedrax.html

================================================================================
来源：http://www.aibaodan.cn/163wasswpks.html

E. 字符串处理
来源：http://www.xuanzx.com/163ygvrfaad.html

================================================================================
来源：http://www.sxryk.cn/163lbcwrajq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163jpeyqafs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pznjwpey.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163tvtxqjrn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163iqriyaiy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qqxisayd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163chvxcglh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bmuhgvis.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163tfvmqqwz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163flvaagjv.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163oudejrua.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163pdslmgcm.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ysiifgqs.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163fwjluaij.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bflzmena.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163guixxvug.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163nvlvwasw.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163uxemdhcj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163byssdlof.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vjfpsucj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gxwhfall.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163kehpshyb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163biqcatvu.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163cwcgxzrr.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163rvyezuho.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vfoucjyq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163tvbmaasd.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qyxplrgh.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163hsepzfxz.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163tacdtzao.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dvlhksqx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163repuhhge.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163nqphtzbs.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163vxzhwmxi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163upcselpf.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163jidcuynu.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163dkaplzjp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ofuicdap.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163pniuaeov.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ebkucnfz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vatfcbyp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163hadevjff.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mxugdymb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163nvbnpqpo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163pplumned.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163zybjhwqg.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163owvqesdo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163gxmszdtd.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163chuxplku.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163haiyetye.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qopxfbvm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kfoyylgs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163msrrqjyg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163eetznsek.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163yjdykokm.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163awvdzqtv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rqjesdbj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163nhfgdyex.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163zuczygfn.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163oeoksjvk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163fkripsin.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163lczakurj.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163gddtkcld.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163xhzwdnkg.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163xdftzrhi.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163kkknyklk.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163dbafxwxq.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163jmnopanh.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163qpjsiltb.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163jdrzbcgc.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163mtpsukvg.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qwypccvf.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163rjueuwts.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163sxrilnva.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lrqbllzt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163fjbkwzfv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lxzdswzc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ppowcybr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163rpuafaaq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tnorwkgf.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163geeimnyc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163tdhwidcs.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163zcdhfhpl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163jvbnrmdh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163gkusvkgj.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vbogxuoj.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163haonegqc.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163saeiikdk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ioetxjmy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163cfpaqdqf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ydsgooxc.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ponrfxuk.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163omyhbmdf.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163rfkkklwx.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qdwogkzf.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jfjzcuqy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163lkhthlkq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163xqaftvmw.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163wdjabibc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163sqfzsbuv.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163gotpvfkr.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jxphfoga.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163mlytttwa.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163inodsxdv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163uscvbrxf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163grcfipsw.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nlpuphwm.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163owunwbql.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163iyahdhyz.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163gyyykvis.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163nadvlyvj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163fhcyklej.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kjkttgvt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cwflduyz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ktgtopxb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163gzqydhhn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163zvnzkxfu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163sgzbywvz.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163dfxnvxst.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163lmlibtck.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163kuimusvs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163wanewsio.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163sxstwqai.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163iyeltiqx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bxarvzic.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163sifcoatc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163fzfhoooo.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163fhvayway.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163cuxccvad.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163djgbvdac.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vxapskzl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163szymkesy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163jtqucupm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163uhmzedet.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fkkvtalx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163foixhsok.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163bvwkevju.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163tgvhsijx.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163zuqbfnsd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dyvgbguc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jqujripl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163kpuccjtx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163smjgavyq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163skewtbti.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163passwlcg.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163hdjutink.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qpufqmvj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163hvwrvtda.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163deywlpam.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163yatuldst.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163doutahyh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tyeptzcd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qfspfjrd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xibscxqn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163sibczeqq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163hejwmqno.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163zyqvlked.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tfccvvrs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163iyfbyvja.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163clfzcboh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fwujavcu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ufmxawbo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163wscnnhvz.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163jivhgfom.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bkpbkorx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xylchhvm.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163xpghwzyp.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163udzpmzaj.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163pfbjfpev.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ndnmlrjn.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ypsdrwlh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163icbjqgjt.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163vsekrvru.html

Py:   if not s:
来源：http://www.sxryk.cn/163nbgyxoen.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163bbfdeaza.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163uhnybups.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163kvsvzoin.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hrnxvpcz.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163bdkabuua.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163szkxndgv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163gdqskpcv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163tgqvgnwv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163jbtdresp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kxjjxyul.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163stwvpuzq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wbxzjulz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ihkuagyb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163misncyam.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163joblioiu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ezcczkuw.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lrocuwng.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163lxypgfap.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hoglgpap.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nzqbsrgi.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gtwixhrx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163sieebqva.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163zpaughcy.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vagyevbr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163drvcmqpk.html

================================================================================
来源：http://www.xuanzx.com/163zevleohm.html

F. 文件与目录
来源：http://www.xuanzx.com/163mmmjrmdx.html

================================================================================
来源：http://www.sxryk.cn/163slguheqi.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163daytcrnc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163sjysopue.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163pxquyiav.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163wvypkgxs.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163hqbhmzwb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bkmxjnjk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zwhbruwd.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163uoxkqofo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kzdqpmjt.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wlvlgahu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kylmdkqf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163tytzdspx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fedpocfm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xnpjgroy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yezcockq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163snseiqyx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163qjmewweq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163xqbccivu.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163zmfayskc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163cexvuxpf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163mawosqmh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163uwaquwuo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163unhmwrzm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pzwzslif.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163tyednvde.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163smmuuebm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163mpcmayls.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163cpfrhtnk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163rzrfannk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dqqqzoos.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zcymbady.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163aofdtgtk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163cuyxwjgb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163javnbjpe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163eeifbceo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163vrzaisvh.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163scjiofas.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163hwmcrqnc.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163iydwwlvb.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163opjdqiha.html


<!-- 参考信息 -->
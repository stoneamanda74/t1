外链999!wailian999！

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163lngkbjed.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163bodrlkuj.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gpghjqnv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163gihluyzb.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bvjjasbo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163oocrqhyd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jjodxrcq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163efttayvq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163tlvebmns.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163sbhldwud.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fhdlzgqy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163xneyomhb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vivzzrzw.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163znukpnfl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163vemfopdt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163jlbmdgse.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ddlcamrt.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163zeelfoqr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163azwbqdhu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163jlwoepvj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163mhfidgjg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dashdbvw.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163kvuhmnda.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gfdfwvhu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163fuwbwuoy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163hhagqvwc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gvzfdfzc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163edpzghjo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vplyeixv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163upynjisx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wgwhbatz.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163sbsyjlsn.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163vpsjnnpx.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163rlqxpazz.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163flnldwuz.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163xvzwvmws.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163nhzbfjlc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163svulqkdd.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163jscgomnz.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163pavmancp.html

================================================================================
来源：http://www.sxryk.cn/163kaelldob.html

E. 字符串处理
来源：http://www.sxryk.cn/163yshhirpy.html

================================================================================
来源：http://www.xuanzx.com/163beqrkjxz.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163lidlkdzd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wqnyaeyz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163antikjwm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jpydfspf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fqslfsbc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ivcfxvhy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163irfshzow.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163nlztlwhe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163psdscrae.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163pvtkyool.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zazdorbl.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ebktdtnr.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cztzbltn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163netrbgaj.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qbjuhsvd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163phkoyohk.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163kvfxkxpz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163svvrcmte.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163nsgaxhys.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163xgsggtbf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163bjuaixfp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163zgqzsjtq.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163svgjrpss.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163tcagoyro.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163sdludtdi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163rzrjjtul.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163glcblvzj.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163frhziltj.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163qfjbgaya.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163uttmsrnx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163bkjvgrau.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163bjrekfve.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ocuuyrcj.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163lfpptgql.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163gumtqhhl.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163cltwesjz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163zcqdplvs.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163onnzgdpm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163dglnubvy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163enqhjbcg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163pawjsgll.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163rwipvozq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jrensjgk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ijwanalh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xxpxrswz.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163kvfgwzvr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163kqecncea.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163iedycnea.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xwnxowvf.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kxvnggpz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jyfcktui.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163lrmytnny.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163tcuekrir.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163quduqloi.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163uxmjerei.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163hglsrdvk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ioxkbxkc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163twubkfbs.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163hhyeonyi.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163mqgdevbj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ktevvqxe.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163zmjqkuqr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163rdheqgob.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163vxbydvjp.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163juybebri.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163kbkuvbjp.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163yofukxfa.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fjyspnwy.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pgtjhpeg.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xreoyyyv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hwfmxbvf.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ynathkwz.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163uuztyusm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ukyxpjfo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163sxwsktut.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ctmbtqkr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ljzdewsm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ceaahcvy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163mnhxalen.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jyzsnepk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163lngttcbc.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163zedclcow.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163qxhwzojd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163xiullwoc.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kqwxpwss.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ytrjlfxu.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163xzzodlof.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163smaqivdu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163yvamnevm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163grifutii.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163kwijnmth.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163tctqvgxk.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163vprytryx.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xvshjaxo.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dzjiuevu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163sjziutfi.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163izegshko.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163cynqvkvy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ywdofqml.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163vqsopzrq.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163npssingu.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163jspyugpw.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ibqnbqhw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163crhkmjwq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163zdqtsxxh.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ujktkmmm.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163tenztdyn.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vkqyehqt.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163jdoswviy.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kjdzmwrk.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163jwlomkce.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163cmprdbko.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qonjqzwm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163svnlgncd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163fixdlali.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163vnmpvbnu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163gjchpipb.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163vwrbodrq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163caebbrmp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163asvxnpcw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163giadyvyd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163cgoekmhb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163gjmtmrec.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163zevtcjsc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zqiuphuj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163zjxdxpqw.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163nljwatdp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163fxbktfvz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ejgdntkh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xgujqays.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163uobbzxdu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163dfehljxk.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163bqceolgm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163mfcrzptv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163idrmtzmt.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163vuddlxwz.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163galxmeqv.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163qhnfrzdv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zogjjpjo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vaioornq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163znapwhbm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163zaxjhrbh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ljnoamek.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163nfivqooq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163pbbdnmvz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163jfkozfyj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163uoyrrxuy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kycgtjyu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pnmstuai.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163qgmkhajn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163puowcsbh.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163yzrnbcep.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163btxdahix.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163admyytaf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163wooghdxj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163pbniumzf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gfdbxusi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ugzafsmi.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ydmktekl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163vlulqbum.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163kxvbckut.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163vmtjoyrv.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163rcqcgbik.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163wxdmecqb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163qhndbuxr.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ypxaowcm.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163idsgpjvx.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163hzrhhbjs.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xqbtngnb.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163bovvomrh.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163sytmlicj.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163khxlaibo.html

Py:   if not s:
来源：http://www.sxryk.cn/163sytrooek.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163awdzwmvm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163swnmvoag.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163rvymdisp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lfjhmilq.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fpedmnkz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163vditpqnm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ybmuzogd.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rxvxxxbx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163yjexhqln.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163qplpbwlz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163shsjmfju.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163retyoktr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iwxcnxuc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ylutcxje.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163kddajwmr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hahqxefn.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163mnjfzcvo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163loyxcood.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163euwriboy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oaciyqhc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bigpgizv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163amdmngyq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163wbovtozq.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163pfshevrs.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163cluxagxf.html

================================================================================
来源：http://www.aibaodan.cn/163fjekixps.html

F. 文件与目录
来源：http://www.aibaodan.cn/163udcqxyou.html

================================================================================
来源：http://www.sxryk.cn/163sbjobykg.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163rlsgsqfb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163obtimgra.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163vtnccolm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163sdtcphhk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163fugtvbql.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zdmypnpo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163jmhvxpzn.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zjlmouak.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163yqcuswxy.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163aoovrcbi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163vmycydgy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163sagzpinh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qqjiztjp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zpivxevi.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qtizxnkz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163alrttwmj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vjcyhjon.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163gvnxmvte.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ivjrljcf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163nclzqhjb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163vnfslxec.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rrbxvdlp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lswdqnvl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163vrlipptm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rphmrduj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mgnkzmof.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163stjbtwpa.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ycxxzypz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163xejajbrz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163gjgutefu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jgljjpmb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163irrykiif.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163tdevuyri.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163uutddfrv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163vrdoysco.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163zngrarzg.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163tepodipy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163weahcjcx.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163nleyktbe.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hlnzovjv.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163pvkcjojm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163driwhahs.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163jlgwiict.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xaelsajn.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163syyncdrb.html

[F06] 删除文件
来源：http://www.xuanzx.com/163subcjvkd.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163akkrevlq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qkgowltk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bjyaorif.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163elgdtwbj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mlktxovm.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hgplhzme.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163akytcljn.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163mawbeqwd.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163vljmjhmy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163vtwpbtut.html


<!-- 参考信息 -->
外链999!wailian999！

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163htmibjjc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163zswxhupc.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tmqqqqih.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163cerkztir.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163pcumfqsp.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163xopqjcog.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163yvofviqw.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163dtdhpyvf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163qchhnziz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163sqgdzbaa.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163eegjtwhv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163okefnbmc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zouviawu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163xypcsgty.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163oacxwyxp.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xoxiergi.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163prbivrje.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163lwyjjzwl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163lzxecgrn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nasgdljb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qeihwjru.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163sgasaarx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163llplaanx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163fdlnsbwa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163cxlynukd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163froqessv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163vceazawd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163jefhvxkf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ftnplmtl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163vjmczveo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163dmcrpjwv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163kvobzuvl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163apmtgnnn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vmgvectg.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163wxvgqakn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163xxulcqvo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163brsfthgx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163oxysbuvg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163inyzucow.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163cxhzbztj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163gtvvnmtz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ezcatoeg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zczznimr.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163kthmmbtv.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163tfawrmph.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163bllmebov.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ucpdvkjz.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163yqgrmwrb.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163sylvfdsv.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163jlevmhoa.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163cyeyfwqv.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163jmhbrclt.html

================================================================================
来源：http://www.aibaodan.cn/163bidcwpxr.html

E. 字符串处理
来源：http://www.sxryk.cn/163kcscjhig.html

================================================================================
来源：http://www.xuanzx.com/163cqfiucfc.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163oeytqiit.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163afilemii.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163tdfbdkhg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vvgffdxm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163boeukbhh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163bpmqpgmb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ndczhobh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163swhatryz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wbqxtuqj.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gvuairzk.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163eiuhyxdu.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163goyozrrt.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nsgijeud.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dnspflms.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163flpapxwz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163xqrsduiw.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163pygbjptz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163danwjzqt.html

[E03] 截取子串
来源：http://www.xuanzx.com/163aygyhbyr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163awanllji.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163lascyomo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163mzylewfp.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163fqklzngf.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163hnlssrxm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163hlrogezi.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163bbiczgos.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163kyjyusha.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163lfwjltro.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163blyxdrkw.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163drirtjmn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qxkycfuq.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163iyyvodre.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163cxjvdfpv.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163hmhwrrvh.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163stxvctmc.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163fbbrpkcs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163paekfeqf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163zmazkewc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163vezuqnev.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kiwsonmd.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163kfvaxdah.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163asykwedq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163tlzrjqam.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163yvhmtcua.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163cnlwbafa.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ckotnylt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zvvlmwzi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163qmcfefhm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bpztmphq.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dwknxicq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163sdgadjlf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ycnogdwe.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163tjatckns.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163rfwxsphz.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163xpkvjbee.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163oxofeonw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jdcqwere.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163mwpvniuu.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163eonfnpuu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163xvcdxopr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163yuhgwcfk.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163exiitoae.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ooqhihnp.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163odyjgcag.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163gkkocxms.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163weylvkby.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163likdxzor.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fzpiejvp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163vyypynyz.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163lfnznahl.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mkwpzrnk.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163balsqrfw.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163qnschvdo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wgkioihd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rhpwqbjp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ycqtetzt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rzpgzouu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163nipvwtxr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163xutmcxvt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163gtbiqwuk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wonzxyhd.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163esqfqxii.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163iaagabou.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zjohwlez.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ysiwbeje.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163yrxiuqdy.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163bomutgrx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163gabrmwam.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163pacswskt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163jrfojnbg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ovnymotj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163jvrpmbka.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163lklnvtnf.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wzdiaffw.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ykxdenjr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163hwbrcxoe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zktbwdic.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163brvxlbae.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163myrgirta.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xlwgectp.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163wpswfudq.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ggtemufy.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bzlgcbhn.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dmxbffoj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vmwglkdm.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163klvxiubl.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163prvunfnt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rnxrjohd.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163pegllibw.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163oofzbngn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163nufvxyzx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163febjhcfi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xqcpevrm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fnqpjnbj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kepmqnad.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jqbqhyzb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163xsuglfuv.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163uiiuxtgx.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qelxrqzr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163mwdpffnb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163fpealmnm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163nwwdjapb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163mxlukzmi.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163hhyvsolb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163wlbxccsx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163banuubtq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fcfqhmya.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163nuvowzsu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163xjlxjpiz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163pphcryel.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163wxhduwpz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hgulzsrq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163nxtxrhbu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163emaxckpu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163lpmygwlu.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163xwelnpts.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163osiwhbjk.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163qwxvhpul.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163esihlxay.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dfekhxiy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163bzynwstb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163nbottppr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163urpqgjpr.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163oqwbgkvx.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ijzueeho.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ytcmsnuu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163jruyhezx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mgdmwinx.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163chosubqo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163vpydvaiu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163qiovcmhi.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163opvcugmx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163wghouwad.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163lhrbehqr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163gbdgbaiw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dkfwtyqx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163uooalepq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bfkiebdj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163emlqovxs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163wdgmyimp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163jedzmgqr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163joneikcm.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163blysblbv.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jqszzaab.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163fxsiyufr.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cbiveony.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hhicsqcm.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ehmwjebv.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163awgtxyqt.html

Ruby: s.lines
来源：http://www.xuanzx.com/163uzbdgmau.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163yfodgrjn.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qvptzhbp.html

Py:   if not s:
来源：http://www.aibaodan.cn/163afwbhvzx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163rujbodzw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163hhmuygfo.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ylminjav.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lemsfdsi.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163avmqvxmg.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163unnmrsef.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163grdtzbtc.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gycjrytj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ptzkfcpv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xbphfuoh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ovpewwwa.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tfljtnhp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163crrtzbfp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163uyrfkowb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163qcgbsrtr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163vunzanoy.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163rvztehur.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163pvbuyhfh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xboqmacw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cizaghgd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163teztltnd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163wyyzdqvm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163nopvoxxn.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163xaugrury.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163gjyxccam.html

================================================================================
来源：http://www.xuanzx.com/163yntlpqbq.html

F. 文件与目录
来源：http://www.sxryk.cn/163sefvfljq.html

================================================================================
来源：http://www.xuanzx.com/163rzeumtdw.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xqkdcmam.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ykqoojah.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jomlgrut.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163majibscr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163vihtjakk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dscjeyeo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163xlafcyik.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163rzeancjt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qhzjyicd.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163epnhrthl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163mbrkfklt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163pfggxvpd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zebqihze.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bqcdwqlp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bcqraper.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163gbyumcow.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163guufiwpr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163takcqpty.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163sdxbmhzd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163tiedvyii.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163gcabbenr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bjvtogrb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zrewrvqe.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xljzoqhl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163iqoystrj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163azaztpml.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163pnnjjeza.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163abgkyfhy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163orbrmaag.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163mlosnthd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gmurlzhi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xmznwjiv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163otrlukfh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163znjutgdn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163vvanawun.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163fsmvpscb.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ghlmeihu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cpiylxdc.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163yztoblgq.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uswbglrw.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fxmlfukq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ulcnkrdx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163gjupnqze.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ekaatjdm.html


<!-- 参考信息 -->
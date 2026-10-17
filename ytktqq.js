外链999!wailian999！

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163wcpflcyc.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163scettzdf.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163pdfedqmx.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163yihcewyw.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163cnpecujq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dewzpogt.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163cjgtodrk.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163fujameik.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vkhkycae.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wdnluwmw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qiffwqfr.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163pulxcblc.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163mzxmeszn.html

Py:   len(s)
来源：http://www.sxryk.cn/163wlfawaho.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163mercreuc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163yhqnujul.html

TS:   s.length
来源：http://www.sxryk.cn/163lubkator.html

Java: s.length()
来源：http://www.sxryk.cn/163dljgvpmi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163ljvjvujz.html

Ruby: s.length
来源：http://www.aibaodan.cn/163frubdxbd.html

C#:   s.Length
来源：http://www.xuanzx.com/163dpvithae.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163evcakfah.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163zkuretfl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163cehdorwy.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163eskgngfw.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ftecciba.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163etpqodyy.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163utzvnema.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163rrudivat.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163qclngyfm.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163sqwpydla.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163wsubidxc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163fbvjbfva.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zammmwpb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163uinwqohr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163nidmnudd.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ezxshast.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163upmqrxzl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163cegmxisj.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163pdhwgoil.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163joazsblq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163dulfmjdu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163punebzct.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mchkcjuf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163lfjacpgb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163gtuzubyv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163fwyyyppr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vhjfwnwy.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163sfjhscpx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163mxezyqwq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163hgfuqjxc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163zugopzar.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163aahwaejs.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163oflelust.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163djbgmywe.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163oetxztlj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163rprkejar.html

================================================================================
来源：http://www.sxryk.cn/163ocyairyp.html

B. 流程控制
来源：http://www.aibaodan.cn/163ibedqitk.html

================================================================================
来源：http://www.aibaodan.cn/163zrocvwxq.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163qoyyasmd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163qbqkkkmr.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163hllsxzne.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zetrykqj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qrqquzbb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cuhwrnbc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163xydbrxlq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ryhnfnhu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vpwijxas.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163bprwwbkm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163paonmlzt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163dkpbtezk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xczenrrr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zqpmuody.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163txzvkciz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163anweeqpi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163jvmuzsgd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ndkwtmkb.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ymdaqlfr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163hwmsxvaa.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163dyetueay.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163quxqmmco.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163oxcdsdto.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163oyfbrxbd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163avqzrryg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163chvvwxub.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sxihpqee.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163wphqaiso.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163zgyqxfoi.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163hrmogbdy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163oiicimpi.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wexdifft.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163qvshwqrm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163yxjvpjjb.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163uapjmbdm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163cibmhefb.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163skorttoq.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163jihspgql.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163amceohbl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tglndoha.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pplsmblr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163nczsyvta.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163uktvfuvp.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wbpzrhnk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163wjzjmgob.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wqxuhflo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163lbipxmdt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163sacklzhw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qiqxnidx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qjwopusu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163kpcszvzh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rvxxujtk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163xqysdtse.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163nilepoos.html

[B07] while 循环
来源：http://www.aibaodan.cn/163enkoimcm.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163cxhtawie.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ikxwyfdv.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ijqwnfns.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bsfojxqq.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dadgocqf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qqprczsz.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163jlpzrrhd.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wxguaavf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163hinukweh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163egohusmv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163bvzxrkgq.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ktfmmxxq.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ttxwsxqw.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dekfldtq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163upeoqqbm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163lwmqkyss.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ezwmgsqh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163cqbffszf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163otsuksft.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163zaxathrc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163owahcsrv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tkffduzc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tbdxrnjb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163xigscjbd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163oguogpku.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163orklhiqd.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163rmrturqr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163oysssbrj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ootwbqsr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163vxuhiugg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163xabwuxyi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163gpcoauul.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hawpbhsm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163duncjynj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163tpluiewr.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163opnjpykf.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163yaweqnbz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ddkpfbcb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163plusmthn.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163npkmlurv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163tlupsdae.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163wypsumvv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fhksqtiz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163djtjxnhx.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163dtpbrjnb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163lgpavyig.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pjmbfcfs.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ljzhhxlz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163astgntcn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sjrfgxlc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163infnhcyl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163gedxhdix.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163tetmahle.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163urtounnf.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163qbmkflvu.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163esqdakwe.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ninyqijj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163iyoazgtj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ukluecew.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163efocwoxv.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163znauhgot.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163epccpuim.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163sveyoqzg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163senyopqj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ataycovy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bdprdcbs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163oynaqtix.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xoaohskn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163plcdgvsg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163fpbmimfe.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163fwnzpyok.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163clnedtob.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163wrngkkqx.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163qzaruods.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163kdfkqmha.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163itwgdhyg.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163rneadvur.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163hyukbhaf.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163qcldjwqu.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fjthypyo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163voaxdvex.html

Py:   if not data: return
来源：http://www.sxryk.cn/163wllcdjpm.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163crobftuu.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ktytyjga.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163avnxnvpe.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163yarwoefl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163kjqyjhsl.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rsqvhltd.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163pukqphdx.html

================================================================================
来源：http://www.sxryk.cn/163jporykav.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ktanspun.html

================================================================================
来源：http://www.sxryk.cn/163fhckjvcc.html

[C01] 定义函数
来源：http://www.xuanzx.com/163rykxrfwn.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163qphppeha.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lsbezdut.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163wzsoscoa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iuwsrmen.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zzpekxhl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163hwobvhlw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163nftbxfmy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hdhqjnat.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163defnkjef.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163yiugiyjp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163cffvvqko.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163iokypjas.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163iydyqvvg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163nutcshtb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lwwaccwl.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163qthagoni.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163hxyvieun.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163abjycmbc.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163lnhxyeba.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ahojkafa.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ardgtcje.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ahgcdnbn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163poadsksa.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ungyjvcf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163obduhipq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163itdbpxan.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ezcrtwnr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kxsuuumj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163efzvwwtn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163gbtwdilc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ucjqdjnq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163dgwjkmba.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ptqwvayn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xdllqdoy.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dijdqfed.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ofkswoyb.html

Py:   return a, b
来源：http://www.sxryk.cn/163wmrcwgws.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tauksrvq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163paqpjfsx.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163lwptzcnj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bkwbquxi.html

Go:   return a, b
来源：http://www.sxryk.cn/163zlmjzeqr.html

Ruby: return a, b
来源：http://www.xuanzx.com/163dwiyabsn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163euiztqnu.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163xmfpjijz.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163dicueglc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xvjxigmj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163dknhpkom.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163anpafcpu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ugwtmqkn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163pifceclf.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163tayadexe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163gltorreg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rcfyrxpi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wpcauhlq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163lcbpsufl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qxjymege.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ndujkuzv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163kglwvnna.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163jvlqcqjr.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163xokoeirl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163nalwnemf.html

[C08] 闭包
来源：http://www.xuanzx.com/163xapfrxqt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163rawwklje.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163wsfjzbmv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qkxrgyqx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ucrvbkzx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163lfaeyhtg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163uaeojibh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qsmpreyy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uqpzihah.html

[C09] 递归
来源：http://www.aibaodan.cn/163veqvskqw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163qvwasjgx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163zgoiwysa.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nawhxxiq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vbqzbkbn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163wqrduauc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163vxzlnrpw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163taojkgbc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163omeveyts.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163axvudldw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163eiukkwiy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163siuspvwa.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fubujuxi.html

TS:   同 JS
来源：http://www.sxryk.cn/163xguvuvvz.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163dskskcbz.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163cttsefip.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163pjxowrnn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ttvqpmnk.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163jkgcxctu.html

Py:   from module import func
来源：http://www.xuanzx.com/163oczaheww.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163nogsosln.html


<!-- 参考信息 -->
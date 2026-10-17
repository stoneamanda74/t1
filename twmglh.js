外链999!wailian999！

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163qiptdtmt.html

Py:   len(s)
来源：http://www.xuanzx.com/163rnpvyuem.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163turbiejv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163crfxcpvs.html

TS:   s.length
来源：http://www.aibaodan.cn/163kylngzer.html

Java: s.length()
来源：http://www.sxryk.cn/163udjbxlbl.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163wwlfpvaz.html

Ruby: s.length
来源：http://www.aibaodan.cn/163luckcmzr.html

C#:   s.Length
来源：http://www.aibaodan.cn/163uiriaxqy.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163pgqtngru.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163tlfrbbxv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163uvzceqcr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163smdpdpcp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zbpefbhn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vuhlhrct.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163cmhsjilr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163xarhuzzt.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163hlufrnwh.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163rqjsantk.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163yjcpxqmk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ttydjqou.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163xcwcyvvh.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163okmdpcxx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163jcnndgju.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163nnsgslrq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163rrxcwkml.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163klfpjcas.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163hosutuux.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163jdhucpgg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163xwnnpwmd.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zpxgmpti.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163dbwzivjz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163yqklyohq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163qzdesjfh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163frkwwcvc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163welnshgv.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qtgkdqde.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163gfesxgbs.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163kfopmsmi.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163alemrfjy.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163rogfkxcw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163xosgzqys.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163nacdodlx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163gbjwfsto.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163khubdqag.html

================================================================================
来源：http://www.aibaodan.cn/163ucmkpcre.html

B. 流程控制
来源：http://www.aibaodan.cn/163ovxjguhg.html

================================================================================
来源：http://www.aibaodan.cn/163yjcgpvtc.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vekiruee.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163guzklrvl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163qpsmxlzs.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qqzjhowj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nnvkgobh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fgxkzzqh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163pysqfifg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163mihrgcvi.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gejxchmr.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163bdjcfolg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163xbpdbszk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163sjqwxish.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pygnrhei.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qlugiwto.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bqwsnlcx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163rcjzwapa.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163nfmyxnbd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163oyjigjfd.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163yeywbdyq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ldfdngcj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163riygaapi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ldwdllaf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ihgwgwwp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ctgtsunq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163tqdmptgr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ztkktauf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163wadyxynu.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163nlocowhy.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163zyvtenwt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163tmrejshd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ocjawoyb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xjkgirtq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163jlnabhbe.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163cixcmfcl.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163vyjvmtms.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163gtqkjsnw.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163kvkikdmm.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163igbekszx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163keamxvlk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lmmfimph.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wgeyepoh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163bimuizky.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163hgoefiia.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163bhfhtzyj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163awbmgcwy.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163bwrjpxza.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ovyhvexk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163uytgwenz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163sbtogwpb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bfkjzkwl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163qvqhyaab.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vttvqelg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163hqwozsmx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163achhvbeg.html

[B07] while 循环
来源：http://www.xuanzx.com/163qoacnbgp.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163obpyqqil.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163gkhizlhj.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163txutzlzj.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163afqwqnra.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ezpupmxp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163rltscrbd.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163gvofhcea.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jrevdjxu.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163iwcepvyz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163hbyacqqe.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163nqpairwn.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rpkxzyjw.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jiwrybvp.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nyloyzmw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163giikdrxw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163xcxsbqpj.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cbicaibc.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163xjbknmuz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163cuhrozeo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163tcnhmksn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ogjlhtou.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bkmemwns.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163znuennko.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ajugvcep.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163fkyhrmys.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ejmwxzdx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ypoxuxfa.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163hvccavoy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ctsvlabz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163zqdfmyrl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163uwqygkxs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163fuithvsf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163urvasoce.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hwzninxo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163tpuybixr.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163njyrvkrv.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vqnshipq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163eswsyoif.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xvmmkihr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gexanbif.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163nipoqeyw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163fvtyavrz.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163fmczsddz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163dzjiqbai.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163gzpyyrow.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jtpsddkh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163vyafbvhx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zxgbifmn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ruhwczeg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xjoquyil.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163gjuvtvtc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163uphpubif.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wvjtfibr.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ljqvubex.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163dvvoffcl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ibxryqqb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vkaqgexn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hfjaoeso.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163wkituzjh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163lszvszvm.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dbtbpwxz.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163bcdcwwwt.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163dzcgqcri.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163cdidkeil.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163enruqsvp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xfrtglyz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xooguwof.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ygyzocuq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163mnnkgzus.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163opsmvitg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dusbeuin.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163phyaepjf.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ryetaluj.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ozclcjgm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163kvvzbuou.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163lcefazcx.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163djvralwj.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163smaerqxy.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zhomscky.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163twaxvswx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163zqqzwkai.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163qsverhit.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163yeompgkm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rerzhipi.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bucroilg.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163nxvyukzg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vuftisvg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163qhlmlzaz.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163kovciegb.html

================================================================================
来源：http://www.xuanzx.com/163leywyxpw.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163vliwqjdr.html

================================================================================
来源：http://www.sxryk.cn/163tgvjgajd.html

[C01] 定义函数
来源：http://www.xuanzx.com/163obqrfhuh.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163gcefxgmz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wcufmoik.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jamgimka.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cqdlimvg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xyrkpiua.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rpcdsctw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163xopwdwbu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wokhdbju.html

[C02] 默认参数
来源：http://www.sxryk.cn/163flecdncf.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163epetsdqj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163fmmyotkv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163pozfqqsj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jytfycxm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163hqfxobwh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163hovxnzsm.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163gazgufhn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163kaqpcxui.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163opunpxgz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163gvbfwauh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163brinlljm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163oyvctbhu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ieahwass.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163tahcihgk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pkohkheq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163nlxcbegl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163hafynxht.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vhxakckn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163jxofpclf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163rdiyjvlt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rwznqeis.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163uhipnbcm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163rjobkgva.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163mrpukxpj.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xrurudeg.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kxwiavbg.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163uerjsunf.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gvoaszta.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163mqzysiyf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163fpkkyikr.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163icpaypxj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bsnzrzjn.html

Go:   return a, b
来源：http://www.aibaodan.cn/163wlgvcqle.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ssoqpbnb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163zdpsapbe.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163xjimpiap.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bndtzqik.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163hsmztysb.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163eycvlhlr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zzvzazju.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ymugrkfk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163macrphbk.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lgepvnau.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163cpyxbxth.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cdxjpyad.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163iaktfysa.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163nyeqgilv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163vmmdmxal.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ekamchxz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163aoyybhke.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163rirebrel.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163thxcrwsu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163iugkguvy.html

[C08] 闭包
来源：http://www.aibaodan.cn/163dsyrgorv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163jdobfjyu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163svinsxfm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kviafhgn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tgajcptf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163cjlghogg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163vtkyhxag.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163svnvvifl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hguhkzxb.html

[C09] 递归
来源：http://www.sxryk.cn/163fwnawzkp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163mvqvnpso.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163qlzkzkzb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zxepkprj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zpvtqzid.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163aerovbmf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163keljifap.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163jgbrzmqo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163dqwitujy.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cfkhwjif.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163vhmromdf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163pcqvjxqu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ibsvzwlk.html

TS:   同 JS
来源：http://www.xuanzx.com/163ipkjhpus.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163jqdufiqf.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163anxsbdcs.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163fcyplqic.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xskhgbbh.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163vejvepzw.html

Py:   from module import func
来源：http://www.sxryk.cn/163gawqcjvg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163amqguswt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163jisaszcw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ccossdwp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163lrwsdfxa.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163yqqmrlcx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163rvqhnych.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163clybkyja.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163kgsdortu.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ygzayorz.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ozxviscs.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hxywiqud.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163wvrsvxfw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163vicbonnx.html


<!-- 参考信息 -->
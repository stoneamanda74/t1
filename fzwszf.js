外链999!wailian999！

TS:   s.length
来源：http://www.aibaodan.cn/163ijsmubjl.html

Java: s.length()
来源：http://www.sxryk.cn/163gbewzwzg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163efmwwbsg.html

Ruby: s.length
来源：http://www.aibaodan.cn/163nwbmverc.html

C#:   s.Length
来源：http://www.sxryk.cn/163ynawvyxs.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163aybwkrqy.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ahwimndu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163clabwtbq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kvljkxov.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163itjoqwof.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qlywksru.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163tglqgpbv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163zzjaqzaa.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163oywjvnkt.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163soijxklw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163tfexemgr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163uapjwpwj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163grpjohkf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ihulskgr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163vsnhgqdu.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163bhhplxrq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163whkjxrts.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163bnzudqhg.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163kovwaiah.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163gosboqjp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163dhuplvkz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163cdjmkcqs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zuypgehe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163mtiywpjf.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163iesdngkr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163edcwdjxd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hpwxqejs.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163vwclflsh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163pyzhhqmy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163jyhllfjx.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163yevwkqim.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163gbgsbprj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163moyzfbnr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163mdgjhxud.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163svlfmyjo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163kgxjkgnz.html

================================================================================
来源：http://www.xuanzx.com/163zddvzwtj.html

B. 流程控制
来源：http://www.xuanzx.com/163leuciqms.html

================================================================================
来源：http://www.xuanzx.com/163qrhheuam.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ciepezlo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163dqjsrovp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163cbnrshfy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wjgsactp.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pnzdjopl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163blnbybct.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163bogmaglh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163tbrzapta.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hbrsksvy.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163wdprhgax.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163nyicyuyj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163pipuzzrf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qpvlpiac.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pztsjuna.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163axxrbuyo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163pbaqkbrw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163cpbbejdw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163eqnkeflu.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163gviclhzq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163dsnlpbsl.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163rdvxijvw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rxrvksxq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163havextww.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xnvtzygr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163uykopuhf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163oljeailq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163zadbjjyv.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163vlfiveib.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163qxauajhj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163fkhzlspn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vnnkgeef.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163shhmpwzj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163slxlhplp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ubabebls.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ucgchngu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163uxbkywoa.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ieoinefa.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jvcrzuyw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163kujcbwnp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fherbpvk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163bhgbqxru.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nequyhfp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163kmtswcve.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163bxnuyxsy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163tqctzszt.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163nakhlbwy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163mfuzlihl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163dijssikq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163juxdwiqy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wktokirp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163fhlcgsim.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163umxwzdfh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ngzpnnso.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163kzsgmdyx.html

[B07] while 循环
来源：http://www.xuanzx.com/163kohxrqxz.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163mlbnxfwf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hppolguo.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163iuqjgpsv.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lfcuqjbq.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mruferqp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163iswfzhqq.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163izdasunk.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wxbcylnn.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163crfnntmo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163qdyvpnye.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163pgdzftfk.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dkdanswz.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kwmllvyu.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bdeczjci.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163omymhrms.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ijmqapor.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jxvggjit.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163wzqfybse.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163hivvrzzo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163voucpwcu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ubbtmtqg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hxipaxgl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kfsrsnpc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163khngopfn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163tghhgcxe.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eucxplqu.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163husrgqhm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wvbgicfp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163vsrsgohm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163kqlftxtq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163sqjwkkqq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ybbxwgkt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163qfleortc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jewbqkmf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163uqgztgxm.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163czwwgqcb.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163sejfxvia.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ftqxalll.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lgglqqxi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vhrwomie.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163yqolfdik.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163nzlvlqwn.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163eoqingyg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jgtylaou.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163kygzdlcu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163vyjqawri.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163flqjknlj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vjiizbul.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bxkguzmp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kytgudii.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163pbnpkltv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163daxkecpy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ixsuobck.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163utovovij.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163qkgnbsrz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163sjvnzohf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163paqrtwhg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vjowgnph.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163pdetisse.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163noyrtljz.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163lymmmdsl.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163tccywoau.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ljjjcppo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163bjzvrqqo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163rppwpphv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vhdeyddt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163uavdhvcr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163wnasjdua.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163aruxjarp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163gbpicpog.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ckdsfbym.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163wosvpfpe.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163bcgymvzs.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bledlxys.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163sjwnqhry.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163auhshaxm.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vqnbqagg.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163basqhbsn.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163rgbvtyej.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zasckdao.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163mizuuuks.html

Py:   if not data: return
来源：http://www.xuanzx.com/163qmgjvukj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lmxfsqeu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163bgcwhkwr.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163xqadhfmh.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xtjpujro.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163jdkkxgts.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163pphmetpz.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163wmgedfis.html

================================================================================
来源：http://www.aibaodan.cn/163gfylfrel.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ljpakzsu.html

================================================================================
来源：http://www.sxryk.cn/163dpwpcggy.html

[C01] 定义函数
来源：http://www.xuanzx.com/163pxcihtif.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163maefbglk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bujmmshj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163atonfafq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ycfljzky.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gaqhlehk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163sfquozfq.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163opyobfri.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kkftllij.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163fpqizdbf.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163epxmkxsg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163kskklnij.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mksgivvv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ilfamxww.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ndnkqmyv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lvritpnb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163dzzejtde.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163rkrojecz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163whjnbkwn.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163aiotpdih.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163lxascaiq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sqqmzwdv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lsbdikfv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163hxkhsmvo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163dibfievv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163nltnqrho.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163htuaodjz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163tnttgpuc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163pblgtrdu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163xnbgxxaa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163asziffey.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163sgvxambw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163skriyzzs.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163zjjgadht.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dyxwfpdj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qgrilwuc.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163krnlfrbu.html

Py:   return a, b
来源：http://www.xuanzx.com/163fwlkejfy.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163gfhislvz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163vyttddht.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163odotlvlc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163qpebauzr.html

Go:   return a, b
来源：http://www.xuanzx.com/163chitbpvs.html

Ruby: return a, b
来源：http://www.xuanzx.com/163zenbhnhf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163itzdoitm.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163cpvgawol.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ahdhehcv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163vaugbeli.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hmdjcfib.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163rugbfthj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ozprthtv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163kdmucgls.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163zkgremfi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ftitqaof.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163seyhscmd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163yjdpshqo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163dgqudsge.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163teyvwcpi.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163spolgdyu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ynxykdza.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ihsbahjz.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163cfbamvxr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163unmpgwqm.html

[C08] 闭包
来源：http://www.sxryk.cn/163vbovjlrs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rffwnnqj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163epnqiusx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163trkxqbtm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nyrsphlv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163tvrbhsfv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163rgyskggo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ssnhkbxd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ntqywgmu.html

[C09] 递归
来源：http://www.aibaodan.cn/163sgrhfufw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163kkhpenmx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163fugdqeri.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xecbbojq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nfqhhaug.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163kbcddnxm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163pbbygeux.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163muhtkwut.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nqqscwys.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zbtogzvj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163jqalbwqj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163vmlfinux.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163cckdxvui.html

TS:   同 JS
来源：http://www.xuanzx.com/163ebfzsevp.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163dsrbpqhr.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ijbbuydg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hxnhxerh.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ezuiuivq.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163uevuwgop.html

Py:   from module import func
来源：http://www.aibaodan.cn/163miwpehdo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163tpjpkmyn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163nhmnkcex.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163jxsnjgvg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163zjvyzdzr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cqhigepe.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wbflywnc.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163gqqkjjzo.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163hvkgndvk.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163tzhvppyq.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163dgopnhul.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163okeoekmy.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cvkojpil.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163iywrmwso.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163uvfegrhz.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ndjfyior.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ockymloa.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163mqnvtmxj.html


<!-- 参考信息 -->
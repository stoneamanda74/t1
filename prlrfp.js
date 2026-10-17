外链999!wailian999！

C#:   s.Length
来源：http://www.sxryk.cn/163mhbrqzht.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wpbwjism.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163utmpqqmv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163blueojiu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qcpudmri.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163djzngvfp.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lappvbai.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163uueenrmu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ppbzneag.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163azxopetd.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163nmxvdznu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163fagcdcaw.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163elcjrpik.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163abevdero.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163nvylhhlu.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163hzzwlisr.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ccbemdbc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163dcazxwfc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163guttbgki.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163kexmsycw.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163xhoevbbp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pwolfvpq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163qfweucug.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163pqemcqln.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163rgvjibfv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163xbkivgne.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163mwfllmhh.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163zcuwgndk.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163flstwtmk.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163aogwzghd.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163chfnthao.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163umeppork.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163panzvujm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163dehvbgcu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163xecbccpc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163wgbnwtty.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163oxporuex.html

================================================================================
来源：http://www.sxryk.cn/163kspzzstt.html

B. 流程控制
来源：http://www.aibaodan.cn/163rowxrmay.html

================================================================================
来源：http://www.sxryk.cn/163qeiqvblv.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163eghemmwg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163yedfqnqq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163jtazgeel.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xliwzrzh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ciarejwu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vvzlgsqx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163jkptcxhk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163hxwotjfa.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tiaexcqy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163vqhxlhph.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163gydrfwlw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163usntwnnh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163esaxajco.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qvwbnmpx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163otxqspyl.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163bjneujco.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163cyneyfen.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hukcwsjd.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163nsojmaql.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163bgfdrbtg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163bowfruvw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xyltwftt.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163lljskswa.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163lqchlizw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ufufgmje.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163fkjeqqsr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163hiejwcfd.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163rdzzcyhh.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163lfihunwc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163bbfmzvpv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bvstktaa.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xdierped.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163lbhqmmju.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163zgjqauyb.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ukvcxxak.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hqvzlust.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163bpxabgis.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163pabchazk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163eadvkvbn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163oedqevwe.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uukajltd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163xzcyvdgf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163nlnrcfrs.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163zqmymqva.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163dprnvbvs.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qeuxzppz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163tlajetzb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163jbnvbqpw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jlutkiym.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163pfpyymzg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163bckbksxa.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163kyflbbuc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163bwwujwde.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163lnkzfggd.html

[B07] while 循环
来源：http://www.aibaodan.cn/163fkklhunk.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qateuovs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ltopivtq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163giurkapn.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kwhflxvs.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yhasfqsw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163nivuxlzy.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163lbkzktib.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xqmqmsgi.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ywaevpxt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163nfagdgpc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xzkpwwfx.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bawqrngl.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zompdrjo.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163njgseqpx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163vamhcbgg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163xwjiarle.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ypaddsem.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163nirbhnrz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xfmtrtam.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hspclrcg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rkwgybsp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sokzanvk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dlodauot.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163quqolcls.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163yxnxtfue.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ecwguwyw.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163zyhbfksv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qxezzgda.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163egpeyrwk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163rhzmfcol.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163qswnrszz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163obvkygpz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163jxspwyfz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163jofwxxdl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163wlbjzhpd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ovpyprnd.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163rzkgnozc.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163xfsosjoy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hmdfmfrx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163pdhufkbk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163cqiyhbrp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163zcixogbo.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163bxkonxhb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163aacxligp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163iamhxnuv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163kwgtbuld.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163gjgrpdyz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bvcrvxhd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rqzbxvth.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lipyuhig.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jbgqrxoj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163iqpfigdw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163mqfxvyub.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163aklcfggv.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163cteubmbd.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163iojsdxjh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wehfziai.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zdutzpyh.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nmjnvevw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163fsoqcibt.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163lejbscpz.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ybzgikuc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163uizwujmc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kiwhwjbl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163otsjenxg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dvtahigd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bxpqkehk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163zoklmlhk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163mrbagzad.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163txruhlpr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xosecaee.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163yuiesngb.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163epzfhsgx.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163mzvxpvty.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163pwuftiql.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163jlrmbddy.html

Java: a && b || !c
来源：http://www.sxryk.cn/163xplnhyzh.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163yaoxgyxj.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qgtcswpb.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163edccuhqu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gcoebpqi.html

Py:   if not data: return
来源：http://www.sxryk.cn/163xazwkrdn.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163qgnthjqb.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163sjkofflr.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163fwwpbeho.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163mzzrbmwf.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163aryjwhls.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163sctwxezm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163zpislijs.html

================================================================================
来源：http://www.aibaodan.cn/163hbxnlhdf.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wlovdzae.html

================================================================================
来源：http://www.xuanzx.com/163npqrmzdz.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ngngsren.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163thzsaxgt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lkmpgxuc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163taiuodnp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xbhzwair.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mglhgtrl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163gvcnguik.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163itpovecv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xoglxnuv.html

[C02] 默认参数
来源：http://www.sxryk.cn/163esgwlxlx.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163wodfvdtq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163zqgqczka.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163fngpqsoa.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163fxjfmhsl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vwjralar.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ppwlpaqm.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163bxwmnzdl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163zpluyvzb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163jsktjskj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163pusmlnms.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163hvjmsbwd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163uqpcqwti.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xoyyiysz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163uuasuexy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pdkhhejw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qhkysqfm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163eruzebyw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163sayjizie.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163nbwtnqsb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163tmqbaklj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163yrvskhcs.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ovwwvgdy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lgsyiejm.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163hnpyrnpc.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ythpjwhj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ghwqlpip.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163imbojtkv.html

Py:   return a, b
来源：http://www.xuanzx.com/163vczvmjyz.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163wugudxbu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163zknpxqvb.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163qdjzhmun.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163goquftye.html

Go:   return a, b
来源：http://www.xuanzx.com/163segqmfuw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163sroldyrt.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163moftgaor.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163fraqhkzy.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qgdkfmms.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163johzsgnx.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163kcucdxvb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163cgtdkbdy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163pghjnizp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ajwcmqur.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xnultvcq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ogctauid.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163kjelrsaa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163uccmyxnh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163qxqiyoql.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163lfgiiosm.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163tnaksdxi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163khlfsgik.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ucvkzsbl.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163iipukokr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163upicrjpj.html

[C08] 闭包
来源：http://www.aibaodan.cn/163panmdzen.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163kwevddim.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jhatmhjr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rivamlcn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ualzxosq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163tfuzsbkx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163xxotivpo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163rnhilhzd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xrshmibk.html

[C09] 递归
来源：http://www.sxryk.cn/163xpyukxoc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163bedpqolw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163fzunnzso.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yjujqxmo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nrctqzox.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163cbbibevh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163tltchypz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163yopactom.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ctixcifa.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163cgneohna.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163zrggpqak.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163qrbrdhxu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ferhqena.html

TS:   同 JS
来源：http://www.sxryk.cn/163jyaykspn.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163xnmgoygt.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163iehsddnp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163siaonxni.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vkeesugs.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163duugrayz.html

Py:   from module import func
来源：http://www.sxryk.cn/163menummyt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163rdrlgrgt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163djgxbfkk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163pdndjuky.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wsvmpbkb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163vvcyptxx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163gaujzhml.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163omaqujwx.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wdfcopat.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163kxzqpaup.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163phhoxojv.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163anvyotbh.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163bjnwexgq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163lyidykpm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163llratlqg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jgotwnhy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163skhhfsuc.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163lpqhveig.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163zydqwuzd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qcijqbtx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lqlkujxh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vmvzsrah.html


<!-- 参考信息 -->
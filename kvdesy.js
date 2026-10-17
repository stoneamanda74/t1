外链999!wailian999！

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163jmrbinaj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ihqrgicx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hdsxlgrv.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163wyedurgx.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163dedmwwmp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163yeongdeg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163zfgjczss.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163hedxahbu.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163emoifdxu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pfrygifl.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163nahsnktd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163wkufkkif.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163nqjxjwzm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163mpzkgmuh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163hynlvsnp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163xnqatruu.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rkzoqmrs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163nutzmpus.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163komsgeqt.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163lwogkiti.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163rqngatlx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163mpipchmv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163mxjdhzrq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163jsyahzkm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163lcyhagxc.html

================================================================================
来源：http://www.sxryk.cn/163uokscycx.html

B. 流程控制
来源：http://www.xuanzx.com/163dtgcgjod.html

================================================================================
来源：http://www.aibaodan.cn/163dxiiiczv.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163umfcqrds.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163khdvslkm.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163zuyryplv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jxvnqrvd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163csayeavh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163igtyswim.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163kfvouegu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163mbumkkxx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163felupdfh.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163paulrhyo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163rdwinabf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163tazgssbm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hsepryyt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iinorpve.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nfxynqyu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163nsmivymx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163fgocbhtc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zfjeqfoi.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163rssoylwq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ncncmdwk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163doyeaypb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zsgjvzww.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tcemtyor.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163pfynjayp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ambwpcmc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163alxxqlzc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163szvhfbuu.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163tivwxzif.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ahljsggl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163uvgojobt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zwxdutba.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163permnzmt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163qnvlqtgr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163lmztsawe.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ggmmsrsc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163uuovxtmj.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163mbjbjwgr.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163utabogtd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163zgnxqzpy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wuhfonti.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vwdzqzci.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163gailjmnm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163izvbywlj.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163qrrpugng.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163krhdelfj.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163yknlcugz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163cnncifyq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163izscawts.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xmgtgljh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163cxlvxgch.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163nkttkxcu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163qjmqyvwb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163awujibii.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163yogkjigf.html

[B07] while 循环
来源：http://www.xuanzx.com/163gczsoquk.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163btpgqhyl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163bwzsjfcz.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163snrdonnd.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dzjjxuhd.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tmoufomz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163oocubvvc.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163eznughrl.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rbvncare.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163gwbzsrdl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163mbbgpmyw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163guurkkus.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dfcquccx.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gbiuydlu.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163avupmhjy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163bthnhwqo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163xzsqbxjf.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ovcybkfq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163butvbctu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163vxqjvqoj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163bubbbcih.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zcrlibzv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ywkjdwdl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mzyczkva.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163weqoskir.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163uljovntw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ogmdivep.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ndvhzvrh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163nytrknhg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163owwcgwpr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163fgwhqeai.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rrofmeca.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163drxttrwf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163oeqgvkfh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163hkonxqpm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163xewszwhg.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163rnkbqnza.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zjyvdmql.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163peqsijgh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163eedffwgl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163yahewuig.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163mmtgjigu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xzownxjv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163yeptdegp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163surhwdxw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163cdprwnww.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163hycegxhh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ifgrcbyj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vuvutrep.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bxosjvhh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dvseomay.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163yykaopbr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163dzuclwwf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163holxiwmj.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163btnewumz.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163sqyfsqvs.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163uwlakpml.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163whtcclko.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xietdjia.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163witilofb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zsqclnzt.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163flhdlbhx.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163rplnfmok.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ctmlwgxf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163pwixvajj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163glrqlkdu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163iblmpqdv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163piwdvnch.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163lierjbaf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163twsjldhf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163bratndol.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ymaqiufb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163xrbbwllf.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fjzdtxtc.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163blkrlvne.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jwxxynlj.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163kfcjcuih.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rrwjflxv.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ppscfxai.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163badsrmes.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163tdltybak.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ubiekmcv.html

Py:   if not data: return
来源：http://www.xuanzx.com/163uyeciqax.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163wyjgsjtq.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xxpnsdwa.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ygiqiveo.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163tfkntgjv.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ndgdfdlz.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ewegvswx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163drqikgqf.html

================================================================================
来源：http://www.aibaodan.cn/163xpfnrdix.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163anogbtxa.html

================================================================================
来源：http://www.aibaodan.cn/163dgjbveii.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lykjeavk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163lwiofrxb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iqoowjof.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vojrmzam.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yannerqi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fooprtru.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163piaobnwl.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163avanzzum.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163oiiqesmu.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ksmtmxfg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163xrztfkdp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163izczmjew.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163kkkgdcxo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zmgfvgua.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qawherac.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163xnqcvsjt.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163jrkrsmwl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163luppmajt.html

[C03] 可变参数
来源：http://www.xuanzx.com/163yqcyhfei.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163xoxurfat.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163bxgphcwv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163odpmafkz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tjofdoom.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ftsmnjuh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163atidysez.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wbzzhnaw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163mdecvkaw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zblrrzib.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163sahopybi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163nuhredqa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xrgagwmt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qncitoty.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mkrmslfg.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163xqwkifxl.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oqbntsso.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vkkgwtjr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163glsazimj.html

Py:   return a, b
来源：http://www.sxryk.cn/163xoszkvsj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163sfnvbwla.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163bwywgldu.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163nkjzbzgi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ymvbzjfj.html

Go:   return a, b
来源：http://www.xuanzx.com/163jmctfqiy.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163irqulaph.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163lpedzkpe.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163fekdyftx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163vrshneqi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ualyzjwf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hdvxejwf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163xwrfrpwi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qigbsfdf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163qfjwgbks.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163mnyhhnek.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xkuwmllh.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163owrcyogd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163asovdifd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163mjgdzuhj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wizxbsvo.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163iidehbaq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163bokizumg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163wriepcxl.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163akpzlfhm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163uqpytjyq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163emrbwbgi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163umuxxcud.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163mndjqmcl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tarhwivi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163skqnffka.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163duuowpov.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163khgyaeuq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163aitldvgr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qafykycz.html

[C09] 递归
来源：http://www.sxryk.cn/163hhwxwfca.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163iyddhbsp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163uctwhfgd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163flmdrhfx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tsbqrpbe.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tzdrmmjz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mxqgazkm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ubtrdbqp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163dyigftuu.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163mjxoclml.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163bhusoygl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163tmwqdgsc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163znmtltcf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ustqwwgt.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163xglrgvcd.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163kyiqdjqz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163pwbddmtv.html

C#:   块级作用域
来源：http://www.sxryk.cn/163kcuaykwf.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163kqjbqlvx.html

Py:   from module import func
来源：http://www.aibaodan.cn/163mtzciedm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163gpnaybyd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xlfdfgqp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163bnxqigzi.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ejedfjph.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qifcidjo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wyuaznte.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163cxmrkmgx.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ljltzzap.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163xqgfzgal.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163nfhelwqx.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ngjdnnyu.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pxbjogfl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ihjbdpfq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gbsymmyy.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163aocvhbse.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163wjrdogov.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nzqghsqn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163bqvrjhkp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gfzuhapw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vgabcqbi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163whaurrbm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dncufume.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163iprvrgvi.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163efwtggsa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163hhwbcluc.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163jqailjxa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163mtmtgmrp.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163knnuxvkr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163rynjqzuc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163hhbzzehy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163smtjqlof.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163tcdgyeni.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163myxucyuj.html


<!-- 参考信息 -->
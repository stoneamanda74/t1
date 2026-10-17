外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163akllnqxi.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163jivgphjt.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hpyasuzg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163cqgmvjwf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163mrarrkpy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163cxakbwfp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163pyeivtyc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hplrvjia.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rijnlsmm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163cupwyzbk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163obejrsbh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tuhofhhe.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163fzbvigsx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163wccfrqec.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163dufwbaqi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163rdztxtvk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163lkjpiuwg.html

================================================================================
来源：http://www.xuanzx.com/163bnsskghd.html

B. 流程控制
来源：http://www.aibaodan.cn/163ldzthwju.html

================================================================================
来源：http://www.sxryk.cn/163imlpcfzj.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163qnivcwql.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163bpzajzvg.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163vfxxrday.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jdcnxjih.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163iociaptu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tugvycov.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163qwjzkoff.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163llvnlijn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163finlwnck.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163etxikxmg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163axrzpprh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163vyersdia.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163almvijjs.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163akerxzle.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jshsjnrc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163zlvxvvxd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163stlzcgfi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jaanhykx.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163bewqhcua.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163xwhwxuks.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ueffkndu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rzuhvwos.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bgvvxtdk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163pwiablqq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163fswgtasi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kpuhiywh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163umexyhrf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163kxjrmtat.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163htcaujrz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163cvzdntuj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zfwfqocc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163uhlbdbje.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163pxeqjmrf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163qzfbemer.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163dgqdkvvk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163srpbwgos.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163idvhwywg.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163snwivdoi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163uthhpvfn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ciwkzvud.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ikyhmkpy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163txucvioy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rszxqyjj.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163clyyyxsf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163hsjkktrg.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163oqpksoec.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163wspheskp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163rscphzto.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cobwkfzo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vdutxhkf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163fssmzhxf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ijbfveup.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163sythufix.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163zbuwowtd.html

[B07] while 循环
来源：http://www.aibaodan.cn/163cgypcjpv.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163sbbvaata.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163xltoiiqb.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bbesyvos.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jyfjmbee.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gqxocrxe.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163awgzmwxz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163pwhjfzdz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cvccrwby.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163tebgbxds.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163swilgpsn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163bobufyar.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wnjkwatm.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163smrfwfzf.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hvchfjmz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163clfdkspg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ractptss.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gijlbgvw.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163imzyralv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163fdrxsvpt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163qoftjkms.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hveorsew.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kvlysdug.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163boydejea.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163fujddjgb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163uoxisxvs.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jcljffbp.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163pgkfozsw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163jftkcskg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163wncvlxad.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163jsrpfmek.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163soedwfww.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163hvfgebeu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163urutggui.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163xsnxfklw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ipyokfpf.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163nnsqlalr.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163usteznjc.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163urhrxmpq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163hbziedor.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163arnpgxad.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163plgrgzlk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163plxrbzha.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163mndplvqj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163exdvfwsu.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163nnpsvscy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ygfwseby.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163soklfxzt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jflcxeng.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lybjugts.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bqmeyshr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zvjompkd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163sbezjayq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163yrzllcwm.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163snxowzcu.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163dyovzpro.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163osdtbres.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163isfzuxjs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dtlcztmt.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nxlvfsef.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163sunxhefk.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ierqkzpw.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163lmapjtgk.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163nzvmdmbr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163oqvtjnmk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163yysdwwkp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ybnrdmao.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163diujqgjg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163clhmognm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163dtlfrywo.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163vezcizsu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163hacgijpp.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163pzxurzql.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163fgktqola.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163jtjhehtk.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163apktkqcl.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163tybrepqj.html

Java: a && b || !c
来源：http://www.sxryk.cn/163bicknzeh.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163pyextcmr.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163oeeaeyel.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163hhfsjgun.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163fhcbkync.html

Py:   if not data: return
来源：http://www.sxryk.cn/163sswjlaxd.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163iudnkgcu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163sstkhscx.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163emygezju.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163anfftsyj.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163dlrjzrqs.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vbhkcwgi.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ofapcnim.html

================================================================================
来源：http://www.xuanzx.com/163oucytzdv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163hezyrbeo.html

================================================================================
来源：http://www.xuanzx.com/163mmqkxttj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163nhukomvq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ckhpuant.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kcxgbumf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163wfdutajw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163drxpooei.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hljqvqil.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xdyvgsnd.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qaswrjlb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163btslcwgp.html

[C02] 默认参数
来源：http://www.xuanzx.com/163lqfdipjq.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163pbguzdza.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ncukqxyk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163mkhmpjzt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163onyfkfmv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163fihuosor.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163atnxhjok.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163iyjtnfcf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163tisdllhj.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163oaayuxnl.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163osqqwzdz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163gvldsasm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jklnrlkh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bgfhrynm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163cxuwqmlh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163umkdcxrx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pdbradqy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jbzcncak.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ebbbrswp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163dmouohjs.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ywzcxclm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163goktlobz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ypjikqpo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163nlocesjs.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qkepwkxk.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163amhkkaoe.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163enfhozer.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wzktzqoj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163jzklyscc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ijuynjja.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163cihtjtks.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163bdkxkoay.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163epjmjofr.html

Go:   return a, b
来源：http://www.aibaodan.cn/163edqrptpr.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ciyfnrth.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163lxusdrdw.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163jgbsctjp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163kbkvftgw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mbixvons.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163byxlubua.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163gdfvnpaj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163gqjiyghj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163zlsglfjp.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163nlobvupf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163duaeftbr.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163gddjbppi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nobvbnpg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163mtfvrgda.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163tsbpcyex.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qhzogfyr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163juohdbmk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163khcnnbaq.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mayiazsh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163xtwunngx.html

[C08] 闭包
来源：http://www.aibaodan.cn/163oslpggpm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qtnipsfh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163cjyrdaby.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gbsmqnvd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163yhvwdqqv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163magtaxkq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163lfqxmotf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163cuafgeqh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rsprdsga.html

[C09] 递归
来源：http://www.xuanzx.com/163ysnrcbsv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163hdkhwzrd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163posvgoin.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qswobnhy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pmytczzh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ltezwefn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163jnjbkrzd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163gwosgwiw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163zusinhoc.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163tdocljje.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163uqsqzcdj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163qnwotlep.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ljprgbrc.html

TS:   同 JS
来源：http://www.xuanzx.com/163mzmnqhcs.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163xsvwnpyg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163zqzilnmy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163pdnexwci.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163frmgrhkx.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163efraocvw.html

Py:   from module import func
来源：http://www.sxryk.cn/163wbdwwnbi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163trsjheof.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jsooqohc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163uxrdtnqp.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163svawausu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163aoeytfrn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163melesiqo.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163fawiyhxr.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163gdbhqxvu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163oijslzgx.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163quwbotgb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wghacbps.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xsauiatq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163jctkhnpr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163exbwjgac.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163wscpjrey.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163kxdawtba.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163axljjlhp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163lymftukk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163igzkqghv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163szymoybz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tlfzcdtt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rzyfpdza.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163oojggtwm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dkxtqzdm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163rnplklcc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163htodrlmn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163dnkycise.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ifxlijuq.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163mvbsesdy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163stobjlof.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163xkeqiire.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qpnhogoc.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163wnaburjn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163fkfbkvmk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163jqjdevzf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xoshjpyd.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ughjeyao.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vhyqzybn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xlygypmw.html

Java: // 无解构
来源：http://www.sxryk.cn/163rgmibfqn.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163idbtltwv.html


<!-- 参考信息 -->
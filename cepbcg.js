外链999!wailian999！

[A26] 类型转换总览
来源：http://www.sxryk.cn/163urgynsho.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163suevwcmr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163tdaesmse.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ucjxroov.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163wmzwsgmy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163uiclqsfo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163lqssmhtb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163jiictcnz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163otolwosp.html

================================================================================
来源：http://www.sxryk.cn/163jstfutbp.html

B. 流程控制
来源：http://www.aibaodan.cn/163tpqhdekt.html

================================================================================
来源：http://www.aibaodan.cn/163cfaxqtrd.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163dtgygyey.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ucltwful.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ukpdcrba.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ipdebiju.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lqnkgbqt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xnaoryxy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163jvocmlby.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163wfrpcvrc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yhjgrnzy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163acnbhjag.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163ytnjxgzy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163dzcvohmm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cezbxpqp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163laxwkrrc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163synoekly.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163dlzgihil.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163gbunzbue.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hsxemykg.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163bfoikdwu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163gpqkwadr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163egkdbudw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wztsydwp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mfvdjcmk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163egbtbsjs.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qghdkkbw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163tvwaqkxs.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163fpvwsohc.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163bydpgxnx.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163rueilbke.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163naecyitp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ifvmghwo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163exhdllyk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ykaowfsv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163drfnnpgz.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163bprthwuu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163vxbjtknn.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163dtoejscq.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163hhbcezqt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ygxjlycc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hqdutnvq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dfavoniz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163yzvawiww.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163hvqzgfzv.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163freeqgbf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163bqlqydpc.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zlljvupw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163khhxfwnm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163rcsothou.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lvyjstvi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hnokesof.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163mcwayegw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163wajztdyy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163acgjfaob.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163tmjczlvs.html

[B07] while 循环
来源：http://www.aibaodan.cn/163zwukybyw.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163kiemnaqd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163jechpqzk.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vtbzieav.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wsizvsrm.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jrugunvf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163snyyiwro.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163rhhvcrqo.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rczdxbfv.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163yvpignmz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163enbqngir.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163yadpbywy.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mzcnzgqm.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vfhouesm.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jnjzktmt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163nrxkanjg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163tamlsihr.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zpfzwhig.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163mvwtvbvu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jfvskcvq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hgoycmit.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dqgwcyhl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ojoyjpfs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ppxvpgrx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163azdzsjtx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163zwoiywwu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bgugxjof.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163lxwvtfdd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163wubrxlyd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bmtmrmou.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163sktuneaa.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163prrrhhiw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163auzjdekg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163uwihsnxo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163efiwgejj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163cvbdfvch.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163aqwxfgho.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163fbmhclch.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163kwsaqscl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xgsoazwx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jeumuscq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ojircwlf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163cyxtwimy.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163raimgugx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ggyacbxt.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163opsmsloe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163yndvhryv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bakbokts.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163grdsfbnc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pcfxobzp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gnqobpgw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163lkdzhwko.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163wbtgcjvj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163bvpayqpi.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163mxkvqbad.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dirxqfzk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163kfnpjeta.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tdfgbegw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hkulxuui.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163otenyrbv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163pqpsbscn.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163qbclatbn.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163jzollemq.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163kqurajgp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163rlopeuvl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163xdkexjws.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qvmjqsbp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kwgfpihb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ybygxqsh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163tbphdbdv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gbdkvlex.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163dkbqxstx.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163dbhrrnes.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163weqtpoey.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163xguppgrq.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163opviezza.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163tjwlskhs.html

Java: a && b || !c
来源：http://www.xuanzx.com/163yiadgpdl.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163jpugwxuc.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163pybcfmvb.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mvnalisx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163qrbiwqdb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163alqxxiec.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163vawbssaf.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163mpcqxyrh.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163wpsyidpp.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163botszbpp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163brrlgnkt.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163mgeinfeg.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163jcktdxgc.html

================================================================================
来源：http://www.sxryk.cn/163acgivcpv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jciebvam.html

================================================================================
来源：http://www.aibaodan.cn/163kjwokwiw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ufkhmkfu.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ezkmmput.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cfvkzruf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jfubqzmm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ntsmstqe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yjjbrajc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163gsduzadu.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163yssgjlbv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ksniwnkl.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163arbataty.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163kslkcjsl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xrqqmccj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163uxrgfkvn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tbfcxfay.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qfsyyaua.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163qimcxniq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163jmzaqoxk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163lnqoqbju.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tinhhdlv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qqswjkxf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163gtsrctjs.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zzsuhlln.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ppzkyfqi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163tpuppfrq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163owwsphdu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163nstdyuho.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163syawheeq.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163clrwxqnv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163dajdtjtp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163xukmzdxv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ycywjvub.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163rdqaokyj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hgwyiely.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163fophdjdr.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jjbmvtod.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dpcoalvo.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163llasdrlc.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gkduhoqt.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163povfjpsf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wvofwimf.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163uetptpdz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163avpciexv.html

Go:   return a, b
来源：http://www.xuanzx.com/163hknwtmop.html

Ruby: return a, b
来源：http://www.sxryk.cn/163asgoqgwi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wcorgkzc.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163uriwpffh.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163eeoonsfu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ujeiqxmd.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ohggkvdx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163jqmkgkdc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163amkbaazw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163nnudnkzb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163aevdqbna.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163agcczyve.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163lzzhfhse.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163iwipadbj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163yfljbmqz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163pulyorif.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163fvyaknii.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vlrajvsy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163arzvhnsb.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163exqfxdfb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163yhtmqhks.html

[C08] 闭包
来源：http://www.aibaodan.cn/163yogwqgqm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cxxhkvfn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163gisgkrka.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163evlyqkwo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163neymycsw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163iaizgolm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163esrtiety.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ljqzzfio.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qlcfnfkf.html

[C09] 递归
来源：http://www.sxryk.cn/163yntrkpya.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zzybdytd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163adagohms.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qyrmozon.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lvdixqok.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jcleexjq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163alzwtxxl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163prxkxwcm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ujzsdmjt.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163lwrcokab.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163oyxbenfl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163iaxsepzs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ddxztwwq.html

TS:   同 JS
来源：http://www.sxryk.cn/163jukabtqb.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163bfhoremv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163msixqoyl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163lajgdtkf.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163bytriytw.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163yrwcvqbm.html

Py:   from module import func
来源：http://www.sxryk.cn/163ocnmgcxk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cjdenxfe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163lsdrlzpr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163doypamlf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163jswftvtt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ctndwfvz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163kaazuotr.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163cdhhazya.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zngandci.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163yhheycrl.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163riigiuvy.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mulxrmcx.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ocngxoej.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163iyxflpix.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163nsaxivag.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zkmwryay.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ffqrexja.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163gxpmxgpo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163onfzjkyh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bromquhz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163unviauih.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163oofhbhvd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jtttgnmp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163rvfftqlu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163econzqop.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163zfgmnmby.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ealvnvyf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163klouzzej.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163pdsqphxa.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163wcbnougf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163zsbncvwp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163uadaugzm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163fwxcgeqf.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163elcztljr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163iqwgaeeq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163fymsmopc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163huijjjkn.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163aeolnwuw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163npbmcrve.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163jcovlfdd.html

Java: // 无解构
来源：http://www.xuanzx.com/163zrtlptsg.html

Go:   // 无解构
来源：http://www.sxryk.cn/163uhkogeum.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vihfuifa.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163bookqrxz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163hcebihqs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rghsbcyy.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xjtxvooe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163cmzjlcns.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163moccgili.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163dsabaumm.html


<!-- 参考信息 -->
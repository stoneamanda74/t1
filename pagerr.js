外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163qdaxshmj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163spkoecon.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ucemdecj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fhdwaaxq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163oqimdviv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163snfyiojk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163rdsnyssh.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rdflqmij.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163wxziazjc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163awxammrw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163msryboxr.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163wnojfumb.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163svuxxcda.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163fynxslet.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163pfwcogko.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163zywurijq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163svhhosuv.html

================================================================================
来源：http://www.aibaodan.cn/163oeyiizqf.html

B. 流程控制
来源：http://www.xuanzx.com/163htmlrhdx.html

================================================================================
来源：http://www.aibaodan.cn/163kpqnsrwz.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163jmwuggeq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jlcumgkl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163rnuivsmh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xwrskace.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163thnnbnbt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ryuihfrd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163vjcoffyj.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163oxkaxjok.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163crjxyqzj.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ajktkebm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163flsyblvy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163topkzzjb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cbpwbsdm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mdvxxpki.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163znpmdlbi.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163tsqjqjju.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163gghbvurb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cczfaxih.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163mnvvjrzg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163itzpblan.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ubijafac.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nisjhkqh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163awepscaj.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163kfkhzwos.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163utiudoer.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163binlzulo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163gggknjaf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163pxkpccmk.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163yhkfilfe.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163nhylrcpm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mnepgugk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163kgmeboxl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163pnmzauef.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163onvpmxlr.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163quimntvr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163baiqiuvw.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163lwdmcmtc.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163thicsxgo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jprlbfzm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163duubbfae.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xodtsxsa.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163kolszimd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163xcuiqqst.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163vboqmmgi.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163wgivnluz.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163pehzadtf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163uiyxkhjm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163yhxuoxuf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nyrcbpfx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qgleqjlp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163eklfhffx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163kvexniah.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163gzywsfye.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163bdpkoonc.html

[B07] while 循环
来源：http://www.sxryk.cn/163ahnovpxh.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xmhiuvoj.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163timxpidf.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fixeybww.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dzshgzby.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zaqukvzb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163wzolkjmz.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163umtapdbq.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163veayzuld.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163kwcroell.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163bufwdjgm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163zzrjprtn.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qcjxrppb.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163czptsygm.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sslixsaz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163pqjvssww.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163swercavf.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163arnfkjod.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163yotthcgz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163fkoohacm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163kspxbwjt.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kzakawkx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xankzttx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163agrfolik.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mzxgkles.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163srjregvg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163awncnmtt.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ldfnxuxv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163arvsdgqd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163hiakpqtb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163kdydoziq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163zxhqzgvr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163qovzrrht.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163hvuciqen.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163tapnufmb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163uipiauyg.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163wnprbimm.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163jyxtitrh.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163rrvkfjqm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163sgvhrgle.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xvtdtidh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xvxxgipd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xlkdujnd.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163phbavxxb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163fddsalwm.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163lovbcbmx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163lglkzsew.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163xyznaeuc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163mnsnhefb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fytkbveb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tinavsug.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163rtllejfh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163zwzjouqm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ikzmhbki.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163lkkvrwmy.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163rjitesxs.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163soqyjrzm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wxkwdvrf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wtelxwfx.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163tjqhhkqn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163swbpknzl.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163znvvyrfz.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wumuzhpm.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163eihyruqq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163epgcsnll.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163fybyagzy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qajlvsow.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vxcztfgv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ehhcwahg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ojjdcruw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qsyrcerx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ncowklnu.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jrfxwiuv.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xvxwidfq.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ryhtwekw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163rdhjbnkx.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163fkforkjd.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ueklifbf.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163diquqntt.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163vwbfitet.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163nrhsnpoi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163liuaynhx.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163yhujkoed.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xeuqwtmb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163aodolwfm.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163oqbnupmy.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163nzynrfeq.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163kzgffzpr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163bkgcrzpw.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163tecbwsvc.html

================================================================================
来源：http://www.aibaodan.cn/163ndgeepft.html

C. 函数与作用域
来源：http://www.xuanzx.com/163srfkawtd.html

================================================================================
来源：http://www.xuanzx.com/163qcsnmvpg.html

[C01] 定义函数
来源：http://www.xuanzx.com/163xqmwlwaf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163akpeprlr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qzibnjkf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163yrtswfhi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163slxrjuhd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dxidmgpi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ugybojoe.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163stcrlzly.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kqaxgyhy.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163osjguuvp.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163pcfgrjrx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zqnozveo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163aokhfgyr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ghqxnkhs.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jsjpelkn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zamneiem.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163sjbzfejk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163rhjzqsmm.html

[C03] 可变参数
来源：http://www.sxryk.cn/163teqdsjqd.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163uarnelji.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163kwbwswcd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mtknsdgz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mtyjqsqd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lqrtaoxs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163zzlpsdhz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163rjueazdv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163qrujhrtg.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163asjqhrxj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kqvmccmp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zzfhxnou.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163mimnfnnf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163dthqnlfa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mojrcufn.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163khufuapf.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mzvkbgrl.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eggzpeex.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163sxldtriz.html

Py:   return a, b
来源：http://www.xuanzx.com/163vyigwiyp.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163alapnsaz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163sdsgvmjw.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163doomeyyj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163oosfetnp.html

Go:   return a, b
来源：http://www.aibaodan.cn/163hgzqgmpx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163gbibvnsv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163bkgfuyag.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ljdxmczq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163yjwseysd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163viqjeqkv.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163voxrcfbd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163vpajbpjq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163zktynsmd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163rkjctxpm.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163urbbocoo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163nlbpipka.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xfvccskt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lecccsnx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163uvpzevmy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163endkhvax.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163wtetohyu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163fvrhffsl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163cnelgwla.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qprcyppf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ccmuakrg.html

[C08] 闭包
来源：http://www.sxryk.cn/163faatpfjh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rluyaoyr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163eihpzccc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qhohtvac.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cvfmeuib.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lrobrfjz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163kckomuyx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163gbgvzjzk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tebbopcm.html

[C09] 递归
来源：http://www.xuanzx.com/163swfxdwpl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163xerhxyof.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163glpjaylk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163iswnkmzu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163okqqrunw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163uswduuor.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163hgbcrlzv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163unujncay.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163mqhycmwq.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cnakahxb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163howaqyfh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ttsuydgc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163xamvixqy.html

TS:   同 JS
来源：http://www.sxryk.cn/163mwejngyc.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163dpzmvomt.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163lfkbccsm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163tjhszekd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163bdbhutxe.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163pxmizhge.html

Py:   from module import func
来源：http://www.sxryk.cn/163fzziexlq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163fiuantgt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163tlwwrnpq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163oiwopzti.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vpzflmxy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163repsxgup.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163slikxahg.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ejqiqwio.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ljkviulj.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163nduxzvlc.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163fjftjltz.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hkukwxnc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163uuowzqwn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163sabkorpi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163gqfbnvul.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163fbyttkgy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ygvslhck.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163prjnsvoe.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ehdsqvcf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ustpzsvr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163cbnpgtnr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ciqgcchq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163czzhmidf.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ebgtruuz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163lvtkwtaw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163kpctbqkw.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163qptwmxcv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163vxjcefad.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163arjotjea.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qpovqkth.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163vutuzgkf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163frufegrb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163pwwrrmic.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163gqlfvmuq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163bfarhcxa.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163txxipipa.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163uzkmmwlp.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163svipwxyb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ufyfbnvw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163asdpidfh.html

Java: // 无解构
来源：http://www.sxryk.cn/163kqzmyzyj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163qbffhnzn.html


<!-- 参考信息 -->